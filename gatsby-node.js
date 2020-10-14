import path, { resolve } from "path"
import fetch from "isomorphic-fetch"
import customizeWinaData from "./src/utils/customizeWineData"

//const WINE_TYPES = ["reds", "whites", "sparkling", "rose", "port"]
const WINE_TYPES = ["reds", "sparkling"]

async function getResultsFromAPI() {
  // aggregates api endpoints into one allWines collection

  const promises = WINE_TYPES.map(async type => {
    const baseURL = `https://sampleapis.com/wines/api/${type}`
    const res = await fetch(baseURL)

    const wines = await res.json()
    return wines.map(wine => customizeWinaData(wine, type))
  })

  const wines = await Promise.all(promises).then(values => values.flat())

  return wines
}

async function createNodesFromWineApiResults({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const wines = await getResultsFromAPI()
  for (const wine of wines) {
    const nodeContent = JSON.stringify(wine)
    const nodeMeta = {
      id: createNodeId(`wine-${wine.name}`),
      parent: null,
      children: [],
      internal: {
        type: `wines`,
        mediaType: `application/json`,
        content: nodeContent,
        contentDigest: createContentDigest(wine),
      },
    }
    const node = { ...wine, ...nodeMeta }
    actions.createNode(node)
  }
}

async function createSingleWinePages({ graphql, actions }) {
  const wineTemplate = path.resolve("./src/templates/SingleWine.js")
  const { createPage } = actions

  const { data } = await graphql(`
    {
      allWines {
        nodes {
          id
          name
        }
      }
    }
  `)

  data.allWines.nodes.forEach(wine => {
    createPage({
      path: `/wines/${wine.name}`,
      component: wineTemplate,
      context: {
        slug: wine.name,
      },
    })
  })
}

async function createTypeWinesPages({ actions }) {
  const winesTemplate = path.resolve("./src/templates/Wines.js")
  const { createPage } = actions

  WINE_TYPES.forEach(type => {
    createPage({
      path: `/wines/${type}`,
      component: winesTemplate,
      context: {
        slug: type,
      },
    })
  })
}

async function createCountryWinesPages({ graphql, actions }) {
  const winesTemplate = path.resolve("./src/templates/WinesByCountry.js")
  const { createPage } = actions

  const { data } = await graphql(`
    {
      allWines {
        totalCount
        nodes {
          id
          location {
            country
          }
        }
      }
    }
  `)

  const uniqueCountries = [
    ...new Set(data.allWines.nodes.map(wine => wine.location.country)),
  ]
  console.log(uniqueCountries)
  uniqueCountries
    .filter(country => country !== "Spain\n")
    .forEach(country => {
      createPage({
        path: `/wines/${country}`,
        component: winesTemplate,
        context: {
          slug: country,
        },
      })
    })
}

export async function sourceNodes(params) {
  await Promise.all([createNodesFromWineApiResults(params)])
}

export async function createPages(params) {
  await Promise.all([
    createSingleWinePages(params),
    createTypeWinesPages(params),
    createCountryWinesPages(params),
  ])
}

/* eslint-disable no-undef */

const axios = require("axios")
const path = require("path")
const customizeWinaData = require("./utils/customizeWineData.js")
const normalizeWineType = require("./utils/normalizeWineType.js")

const WINE_TYPES = ["reds", "whites", "sparkling", "rose", "port"]

async function getResultsFromAPI() {
  // agregates multiple api endpoints into one allWines collection

  const promises = WINE_TYPES.map(async type => {
    const baseURL = `https://sampleapis.com/wines/api/${type}`
    const wines = await axios.get(baseURL)

    return wines.data.map(wine => customizeWinaData(wine, type))
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
      path: `/wines/${wine.id}`,
      component: wineTemplate,
      context: {
        slug: wine.id,
      },
    })
  })
}

async function createTypeWinesPages({ actions }) {
  const winesTemplate = path.resolve("./src/templates/WinesByType.js")
  const { createPage } = actions

  WINE_TYPES.forEach(type => {
    createPage({
      path: `/wines/${normalizeWineType(type)}`,
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

  uniqueCountries.forEach(country => {
    createPage({
      path: `/wines/${country.slice(0, -1)}`,
      component: winesTemplate,
      context: {
        slug: country,
      },
    })
  })
}

async function createWineryWinesPages({ graphql, actions }) {
  const winesTemplate = path.resolve("./src/templates/WinesByWinery.js")
  const { createPage } = actions

  const { data } = await graphql(`
    {
      allWines {
        totalCount
        nodes {
          id
          winery
        }
      }
    }
  `)

  const uniqueWineries = [
    ...new Set(data.allWines.nodes.map(wine => wine.winery)),
  ]

  console.log(uniqueWineries)

  uniqueWineries.forEach(winery => {
    createPage({
      path: `/wines/${winery}`,
      component: winesTemplate,
      context: {
        slug: winery,
      },
    })
  })
}

exports.sourceNodes = async params => {
  await Promise.all([createNodesFromWineApiResults(params)])
}

exports.createPages = async params => {
  await Promise.all([
    createSingleWinePages(params),
    createTypeWinesPages(params),
    createCountryWinesPages(params),
    createWineryWinesPages(params),
  ])
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CountryLink } from "./styles"

const query = graphql`
  {
    allWines {
      nodes {
        location {
          country
        }
      }
    }
  }
`

const Regions = () => {
  const data = useStaticQuery(query)
  const uniqueCountries = [
    ...new Set(data.allWines.nodes.map(wine => wine.location.country)),
  ]
    .sort()
    .filter(country => !!country)

  return (
    <>
      {uniqueCountries.map(country => (
        <CountryLink
          color="var(--primary)"
          key={country}
          to={`/wines/${country.slice(0, -1)}`}
        >
          {country}
        </CountryLink>
      ))}
    </>
  )
}

export default Regions

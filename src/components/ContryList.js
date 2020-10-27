import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CountryLinkCarousel from "./CountryLinkCarousel"

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

const CountryList = () => {
  const data = useStaticQuery(query)
  const uniqueCountries = [
    ...new Set(data.allWines.nodes.map(wine => wine.location.country)),
  ].sort()

  return (
    <div>
      {/* {uniqueCountries.map(country => (
        <CountryLink
          color="var(--dark-purple)"
          key={country}
          to={`/wines/${country.slice(0, -1)}`}
        >
          {country}
        </CountryLink>
      ))} */}
      <CountryLinkCarousel links={uniqueCountries} />
    </div>
  )
}

export default CountryList

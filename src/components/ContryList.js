import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StyledLink from "../styles/StyledLink"
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

const CountryLink = styled(StyledLink)`
  font-size: 1.4rem;
  margin: 0 0.5rem;
`

const CountryList = () => {
  const data = useStaticQuery(query)
  const uniqueCountries = [
    ...new Set(data.allWines.nodes.map(wine => wine.location.country)),
  ].sort()

  return (
    <div>
      {uniqueCountries.map(country => (
        <CountryLink
          color="var(--dark-purple)"
          key={country}
          to={`/wines/${country.slice(0, -1)}`}
        >
          {country}
        </CountryLink>
      ))}
    </div>
  )
}

export default CountryList

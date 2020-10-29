import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StyledLink from "../styles/StyledLink"

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
  font-size: 1.6rem;
  padding: 0.5rem;
  text-align: center;
`

const CountryList = () => {
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
          color="var(--dark-purple)"
          key={country}
          to={`/wines/${country.slice(0, -1)}`}
        >
          {country}
        </CountryLink>
      ))}
    </>
  )
}

export default CountryList

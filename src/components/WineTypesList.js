import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StyledLink from "../styles/StyledLink"
import NavDropdown from "./NavDropdown"
import CountryList from "./ContryList"

const query = graphql`
  {
    allWines {
      nodes {
        id
        type
      }
    }
  }
`

const WineTypesList = () => {
  const data = useStaticQuery(query)
  const uniqueTypes = [
    ...new Set(data.allWines.nodes.map(wine => wine.type)),
  ].sort()

  return (
    <div>
      {uniqueTypes.map(type => (
        <StyledLink color="var(--misty-rose)" key={type} to={`/wines/${type}`}>
          {type} Wines
        </StyledLink>
      ))}
      <NavDropdown>
        <CountryList />
      </NavDropdown>
    </div>
  )
}

export default WineTypesList

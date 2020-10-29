import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StyledLink from "../styles/StyledLink"
import NavDropdown from "./NavDropdown"
import CountryList from "./ContryList"

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
    <StyledList>
      {uniqueTypes.map(type => (
        <StyledLink color="var(--misty-rose)" key={type} to={`/wines/${type}`}>
          {type} Wines
        </StyledLink>
      ))}
      <NavDropdown>
        <CountryList />
      </NavDropdown>
    </StyledList>
  )
}

export default WineTypesList

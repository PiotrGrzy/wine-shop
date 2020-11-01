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
  const uniqueTypes = [...new Set(data.allWines.nodes.map(wine => wine.type))]
    .sort()
    .map(type => {
      if (type === "reds") {
        return "red"
      } else if (type === "whites") {
        return "white"
      } else {
        return type
      }
    })

  return (
    <StyledList>
      {uniqueTypes.map(type => (
        <StyledLink
          color="var(--secondary-light)"
          key={type}
          to={`/wines/${type}`}
        >
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

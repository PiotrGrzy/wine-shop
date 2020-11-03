import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StyledLink from "styles/StyledLink"
import Dropdown from "components/Dropdown"
import Regions from "components/Regions"

import { StyledNav, StyledList } from "./styles"

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

const BottomNav = () => {
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
    <StyledNav>
      <div className="container">
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
          <Dropdown>
            <Regions />
          </Dropdown>
        </StyledList>
      </div>
    </StyledNav>
  )
}

export default BottomNav

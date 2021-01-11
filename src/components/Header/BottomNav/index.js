import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StyledLink from "styles/StyledLink"
import Dropdown from "components/Dropdown"
import Regions from "components/Regions"

import { StyledNav, StyledList } from "./styles"
import { useMedia } from "../../../hooks/useMedia"

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
  const mediaMatch = useMedia("(max-width:699px)")
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

  const WineTypes = () =>
    uniqueTypes.map(type => (
      <StyledLink
        color="var(--secondary-light)"
        key={type}
        to={`/wines/${type}`}
      >
        {type} Wines
      </StyledLink>
    ))
  return (
    <StyledNav>
      <div className="container">
        <StyledList>
          {mediaMatch ? (
            <Dropdown category="Wine Types" position="left">
              <WineTypes />
            </Dropdown>
          ) : (
            <WineTypes />
          )}

          <Dropdown category="Regions">
            <Regions />
          </Dropdown>
        </StyledList>
      </div>
    </StyledNav>
  )
}

export default BottomNav

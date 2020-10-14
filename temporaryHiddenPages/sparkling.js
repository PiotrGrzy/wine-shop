import React from "react"
import { graphql } from "gatsby"
import WineList from "../src/components/WineList"

const sparkling = ({ data }) => {
  const {
    allSparkling: { nodes: wines, totalCount },
  } = data
  return (
    <div className="container">
      <WineList
        wines={wines}
        total={totalCount}
        title="Sparkling Wine for Celebration"
      />
    </div>
  )
}

export const query = graphql`
  {
    allSparkling {
      totalCount
      nodes {
        id
        image
        name: wine
        rating {
          average
          reviews
        }
        winery
        location
      }
    }
  }
`

export default sparkling

import React from "react"
import { graphql } from "gatsby"
import WineList from "../components/WineList"

const reds = ({ data }) => {
  const {
    allReds: { nodes: wines, totalCount },
  } = data
  return (
    <div className="container">
      <WineList wines={wines} total={totalCount} title="Classis Red Wines" />
    </div>
  )
}

export const query = graphql`
  {
    allReds {
      totalCount
      nodes {
        id
        price
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

export default reds

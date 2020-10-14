import React from "react"
import { graphql } from "gatsby"
import WineList from "../components/WineList"

const whites = ({ data }) => {
  const {
    allWhites: { nodes: wines, totalCount },
  } = data
  return (
    <div className="container">
      <WineList wines={wines} total={totalCount} title="Tasty white Wines" />
    </div>
  )
}

export const query = graphql`
  {
    allWhites {
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

export default whites

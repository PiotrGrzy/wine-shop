import React from "react"
import { graphql } from "gatsby"
import WineList from "../src/components/WineList"

const rose = ({ data }) => {
  const {
    allRose: { nodes: wines, totalCount },
  } = data

  return (
    <div className="container">
      <WineList wines={wines} total={totalCount} title="Delicious Rose Wines" />
    </div>
  )
}

export const query = graphql`
  {
    allRose {
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

export default rose

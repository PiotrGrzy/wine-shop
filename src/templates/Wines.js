import React from "react"
import { graphql } from "gatsby"
import WineList from "../components/WineList"

const Wines = ({ data }) => {
  const {
    allWines: { nodes: wines, totalCount },
  } = data
  return (
    <div className="container">
      <WineList wines={wines} total={totalCount} title="Classis Red Wines" />
    </div>
  )
}

export const query = graphql`
  query byCountry($slug: String) {
    allWines(filter: { type: { eq: $slug } }) {
      nodes {
        location {
          country
          region
        }
        image
        id
        name
        price
        rating {
          average
          reviews
        }
        type
        winery
      }
      totalCount
    }
  }
`

export default Wines

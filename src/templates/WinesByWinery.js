import React from "react"
import { graphql } from "gatsby"
import WineList from "../components/WineList"

const WinesByWinery = ({ data, pageContext }) => {
  const {
    allWines: { nodes: wines, totalCount },
  } = data

  if (!wines) return <p>Wines not found</p>
  return (
    <div className="container">
      <WineList wines={wines} total={totalCount} title={pageContext.slug} />
    </div>
  )
}

export const query = graphql`
  query ByWinery($slug: String) {
    allWines(filter: { winery: { eq: $slug } }) {
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
        isBestSeller
        isDiscounted
        discountPercentage
      }
      totalCount
    }
  }
`

export default WinesByWinery

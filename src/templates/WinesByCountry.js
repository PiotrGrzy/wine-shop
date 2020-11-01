import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import WineList from "../components/WineList"

const WinesByCountry = ({ data, pageContext }) => {
  const {
    allWines: { nodes: wines, totalCount },
  } = data

  if (!wines) return <p>Wine not found</p>
  return (
    <div className="container">
      <WineList wines={wines} total={totalCount} title={pageContext.slug} />
    </div>
  )
}

export const query = graphql`
  query ByCountry($slug: String) {
    allWines(filter: { location: { country: { eq: $slug } } }) {
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

WinesByCountry.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default WinesByCountry

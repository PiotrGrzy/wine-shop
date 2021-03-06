import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import WineList from "../components/WineList"
import { normalizeWineType } from "utils/normalizeWineType"
import SEO from "components/SEO"

const WinesByType = ({ data, pageContext }) => {
  const {
    allWines: { nodes: wines, totalCount },
  } = data
  return (
    <div className="container">
      <SEO title={`${normalizeWineType(pageContext.slug)} Wines`} />
      <WineList wines={wines} total={totalCount} title={pageContext.slug} />
    </div>
  )
}

export const query = graphql`
  query byType($slug: String) {
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
        isBestSeller
        isDiscounted
        discountPercentage
      }
      totalCount
    }
  }
`

WinesByType.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default WinesByType

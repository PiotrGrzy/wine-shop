import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import WineList from "../components/WineList"
import { normalizeWineType } from "utils/normalizeWineType"
import SEO from "components/SEO"

const WinesByWinery = ({ data, pageContext }) => {
  const {
    allWines: { nodes: wines, totalCount },
  } = data

  if (!wines) return <p>Wines not found</p>
  return (
    <div className="container">
      <SEO title={`${normalizeWineType(pageContext.slug)} Winery Wines`} />
      <WineList
        wines={wines}
        total={totalCount}
        title={`${pageContext.slug} winery`}
      />
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

WinesByWinery.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default WinesByWinery

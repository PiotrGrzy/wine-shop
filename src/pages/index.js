import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import SEO from "components/SEO"
import Carousel from "components/Carousel"

const StyledWrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: var(--white);

  h2 {
    font-size: 3rem;
    text-align: center;
    margin: 4rem 0;
    color: var(--primary);
  }

  /* .offer {
    width: auto;
    max-width: 100%;
  }
  .slick-slider {
    margin: 30px auto 50px;
    width: auto;
    max-width: 100%;
  } */
`

const IndexPage = ({ data }) => {
  const {
    allBestSellers: { nodes: bestSellers, totalCount: bestSellersTotal },
    allDiscounted: { nodes: discounted, totalCount: discountedTotal },
  } = data

  return (
    <>
      <SEO title="Home" />
      <div className="container">
        <StyledWrapper>
          <section className="offer">
            <h2>Our Bestselling Wines</h2>
            <Carousel items={bestSellers} total={bestSellersTotal} />
            <h2>Check our Sale</h2>~
            <Carousel items={discounted} total={discountedTotal} />
          </section>
        </StyledWrapper>
      </div>
    </>
  )
}

export const query = graphql`
  {
    allBestSellers: allWines(
      filter: { isBestSeller: { eq: true } }
      limit: 15
    ) {
      totalCount
      nodes {
        image
        winery
        id
        name
        price
        rating {
          average
          reviews
        }
        type
        location {
          country
          region
        }
        isBestSeller
        isDiscounted
        discountPercentage
      }
    }
    allDiscounted: allWines(filter: { isDiscounted: { eq: true } }, limit: 15) {
      totalCount
      nodes {
        image
        winery
        id
        name
        price
        rating {
          average
          reviews
        }
        type
        location {
          country
          region
        }
        isBestSeller
        isDiscounted
        discountPercentage
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

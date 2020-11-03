import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "components/SEO"
import Carousel from "components/Carousel"

const StyledWrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: var(--white);

  .img-box {
    position: relative;
  }

  h1 {
    position: absolute;
    font-size: min(9vw, 12rem);
    font-weight: 300;
    z-index: 5;
    color: var(--white);
    max-width: 50%;
    text-align: right;
    margin: 2rem;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    margin: 4rem 0;
    color: var(--primary);
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allBestSellers: allWines(
        filter: { isBestSeller: { eq: true } }
        limit: 30
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
      allDiscounted: allWines(
        filter: { isDiscounted: { eq: true } }
        limit: 30
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
      imageSharp(fluid: { originalName: { eq: "bg-large.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  const {
    allBestSellers: { nodes: bestSellers, totalCount: bestSellersTotal },
    allDiscounted: { nodes: discounted, totalCount: discountedTotal },
    imageSharp: { fluid },
  } = data

  return (
    <>
      <SEO title="Home" />
      <div className="container">
        <StyledWrapper>
          <section className="hero">
            <div className="img-box">
              <h1>Best Wines You Can Find</h1>
              <Img fluid={fluid} />
            </div>
          </section>
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

export default IndexPage

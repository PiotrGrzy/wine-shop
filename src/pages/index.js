import React from "react"
import { Link } from "gatsby"
import CountryList from "../components/ContryList"

import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Carousel from "../components/Carousel"

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
  `)

  const {
    allBestSellers: { nodes: bestSellers, totalCount },
    allDiscounted: { nodes: discounted },
  } = data

  return (
    <>
      <SEO title="Home" />
      <div className="container">
        <h2>Our Bestselling Wines</h2>
        <Carousel items={bestSellers} />
        <h2>Check our Sale</h2>~
        <Carousel items={discounted} />
      </div>
    </>
  )
}

export default IndexPage

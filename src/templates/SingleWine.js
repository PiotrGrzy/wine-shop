import React from "react"
import { graphql } from "gatsby"

const Wine = ({ data }) => {
  console.log(data)
  const {
    wines: { name, image },
  } = data
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
    </div>
  )
}

export const query = graphql`
  query SingleWineQuery($slug: String) {
    wines(name: { eq: $slug }) {
      id
      image
      price
      rating {
        average
        reviews
      }
      location {
        country
        region
      }
      description
      name
      winery
    }
  }
`

export default Wine

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import StyledWine, { WineCard } from "../styles/WineCard"
import Rating from "../components/Rating"
import DiscountBadge from "../components/DiscountBadge"
import BestsellerBadge from "../components/BestsellerBadge"

const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 3rem;
  font-weight: 700;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--wisteria);
  }
`

const IncButton = styled(Button)`
  grid-area: 7/4/8/-1;
`

const DecButton = styled(Button)`
  grid-area: 7/2/8/3;
`

const Input = styled.input`
  border: none;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  width: 8rem;
`

const AddButton = styled(Button)`
  grid-area: 8/1/-1/-1;
  background-color: var(--dark-purple);
  color: var(--white);
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`

const Wine = ({ data }) => {
  console.log(data)
  const {
    wines: {
      name,
      image,
      price,
      rating,
      location,
      description,
      winery,
      isDiscounted,
      discountPercentage,
      isBestSeller,
    },
  } = data

  return (
    <div className="container">
      <WineCard>
        <img src={image} alt={name} />
        <div className="heading">
          <h1>{name}</h1>
          <p className="winery">{winery}</p>
        </div>
        <p className="location">
          {location.country} - {location.region}{" "}
        </p>
        <p className="description">{description}</p>
        <div className="rating">
          <p>Customers review</p>
          <Rating rating={rating} className="rating" />
        </div>
        <p className="price">{price} zł</p>
        <IncButton>&#43;</IncButton>
        <div className="input">
          <Input type="text" value={12} />
        </div>
        <DecButton>&#x2212;</DecButton>
        <AddButton> &#43; Add to Cart</AddButton>

        {isDiscounted && <DiscountBadge discount={discountPercentage} />}
        {isBestSeller && <BestsellerBadge />}
      </WineCard>
    </div>
  )
}

export const query = graphql`
  query SingleWineQuery($slug: String) {
    wines(id: { eq: $slug }) {
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
      isBestSeller
      isDiscounted
      discountPercentage
    }
  }
`

export default Wine

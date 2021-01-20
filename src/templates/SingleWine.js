import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import WineCard from "styles/WineCard"
import StyledLink from "styles/StyledLink"
import Rating from "components/Rating"
import DiscountBadge from "components/DiscountBadge"
import BestsellerBadge from "components/BestsellerBadge"
import { useCartContext } from "cartContext/CartContextProvider"
import { addItemToCart } from "cartContext/cartActions"
import { toast } from "react-toastify"
import SEO from "components/SEO"

const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 3rem;
  font-weight: 700;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--secondary);
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
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  width: 6rem;
`

const AddButton = styled(Button)`
  grid-area: 8/1/-1/-1;
  background-color: var(--primary);
  color: var(--white);
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`

const WineryLink = styled(StyledLink)`
  &:hover {
    color: var(--secondary);
    border-bottom: 1px solid var(--secondary);
  }
`

const Wine = ({ data }) => {
  const [count, setCount] = useState(1)
  const { dispatch } = useCartContext()

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

  const handleChange = e => {
    setCount(e.target.value)
  }

  const handleAddToCart = () => {
    const orderCount = parseInt(count)
    if (count && count > 0) {
      const cartItem = { data: data.wines, count: orderCount }
      addItemToCart(dispatch, cartItem)
      setCount(1)
      toast.info("Wine added to Cart!", { className: "toast" })
    }
  }

  const incrementCount = () => {
    setCount(count => count + 1)
  }
  const decrementCount = () => {
    if (count <= 1) return
    setCount(count => count - 1)
  }

  return (
    <div className="container">
      <SEO />
      <WineCard>
        <img src={image} alt={name} />
        <div className="heading">
          <h1>{name}</h1>
          <p className="winery">
            Winery: <WineryLink to={`/wines/${winery}`}>{winery}</WineryLink>
          </p>
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
        <IncButton onClick={incrementCount}>&#43;</IncButton>
        <div className="input">
          <Input type="text" value={count} onChange={handleChange} />
        </div>
        <DecButton onClick={decrementCount}>&#x2212;</DecButton>
        <AddButton onClick={handleAddToCart}> &#43; Add to Cart</AddButton>

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

Wine.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Wine

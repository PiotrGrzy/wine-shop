import React from "react"
import PropTypes from "prop-types"
import Rating from "components/Rating"
import Button from "components/Button"
import BestsellerBadge from "components/BestsellerBadge"
import DiscountBadge from "components/DiscountBadge"
import { WineCard, LinkTitle } from "./styles"

import { useCart } from "cartContext/CartContextProvider"
import { addItemToCart } from "cartContext/cartActions"

const WineListItem = ({ wine }) => {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    const cartItem = { data: wine, count: 1 }
    addItemToCart(dispatch, cartItem)
  }

  const {
    image,
    name,
    id,
    location,
    rating,
    price,
    isBestSeller,
    isDiscounted,
    discountPercentage,
  } = wine

  return (
    <WineCard>
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="info-wrapper">
        <LinkTitle to={`/wines/${id}`}>{name}</LinkTitle>
        <p className="location">{location.country}</p>
        <p className="location">{location.region}</p>
        <Rating rating={rating} />
        <p className="price">{price} zł</p>
        <Button onClick={handleAddToCart}>Add to cart</Button>
        {isBestSeller && <BestsellerBadge small />}
        {isDiscounted && <DiscountBadge small discount={discountPercentage} />}
      </div>
    </WineCard>
  )
}

WineListItem.propTypes = {
  wine: PropTypes.object.isRequired,
}

export default WineListItem

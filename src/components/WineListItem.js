import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from "gatsby"
import Rating from "./Rating"
import Button from "./Button"
import emptyBottle from "../images/empty_bottle.jpg"
import BestsellerBadge from "./BestsellerBadge"
import DiscountBadge from "./DiscountBadge"

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: right;
`
const WineCardStyled = styled.li`
  position: relative;
  height: 40rem;
  display: grid;
  padding: 2rem;
  grid-template-columns: 75px 1fr;
  gap: 3rem;
  border: 1px solid var(--misty-rose);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-color: var(--white);
  .image-wrapper {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .info-wrapper {
    display: grid;
    grid-template-rows: 1fr 30px 30px 30px 60px;
    row-gap: 1rem;
    align-items: center;
    justify-items: right;
    color: var(--dark-purple);
  }

  .price {
    width: 100%;
    font-size: 2rem;
    text-align: right;
    font-weight: bold;
  }
  .location {
    font-size: 1.6rem;
  }
`

const WineListItem = ({ wine }) => {
  const handleAddToCart = e => {
    console.log("add to Cart!!")
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
    <WineCardStyled>
      <div className="image-wrapper">
        <img src={image} alt={name} onError={emptyBottle} />
      </div>
      <div className="info-wrapper">
        <StyledLink to={`/wines/${id}`}>{name}</StyledLink>
        <p className="location">{location.country}</p>
        <p className="location">{location.region}</p>
        <Rating rating={rating} />
        <p className="price">{price} zł</p>
        <Button onClick={handleAddToCart}>Add to cart</Button>
        {isBestSeller && <BestsellerBadge small />}
        {isDiscounted && <DiscountBadge small discount={discountPercentage} />}
      </div>
    </WineCardStyled>
  )
}

WineListItem.propTypes = {
  wine: PropTypes.object.isRequired,
}

export default WineListItem

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from "gatsby"
import Rating from "./Rating"
import Button from "./Button"
import emptyBottle from "../images/empty_bottle.jpg"

const WineCardStyled = styled.li`
  display: grid;
  padding: 1.5rem;
  grid-template-columns: 75px 1fr;
  gap: 3rem;
  border: 1px solid var(--misty-rose);
  border-radius: 5px;
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

  h5 {
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 2rem;
    text-align: right;
  }

  .price {
    width: 100%;
    font-size: 2rem;
    text-align: right;

    font-weight: bold;
  }
  .location {
    font-size: 1.4rem;
  }
`

const StyledIcon = styled(FiShoppingCart)`
  color: red;
`

const WineListItem = ({ wine }) => {
  const handleAddToCart = e => {
    console.log("add to Cart!!")
  }

  return (
    <WineCardStyled>
      <div className="image-wrapper">
        <img
          src={wine.image}
          alt={wine.name}
          onerror={`this.src='${emptyBottle}'`}
        />
      </div>
      <div className="info-wrapper">
        <h5>{wine.name}</h5>
        <p className="location">{wine.location.country}</p>
        <p className="location">{wine.location.region}</p>
        <Rating rating={wine.rating} />
        <p className="price">{wine.price} zł</p>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </div>
      <Link to={`/wines/${wine.id}`}>Show Details</Link>
    </WineCardStyled>
  )
}

WineListItem.propTypes = {
  wine: PropTypes.object.isRequired,
}

export default WineListItem

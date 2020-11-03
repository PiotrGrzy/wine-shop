import React from "react"
import PropTypes from "prop-types"
import { BsStarFill } from "react-icons/bs"
import { StyledRating } from "./styles"

const Rating = ({ rating }) => {
  const goldStars = Array(Math.round(rating.average)).fill(1)
  const greyStars = Array(5 - Math.round(rating.average)).fill(1)
  return (
    <StyledRating>
      {goldStars.map((_, i) => (
        <BsStarFill color="goldenrod" key={i} />
      ))}
      {greyStars.map((_, i) => (
        <BsStarFill color="grey" key={i} />
      ))}
      <span>({rating.reviews.slice(0, 2)})</span>
    </StyledRating>
  )
}

Rating.propTypes = {
  rating: PropTypes.object.isRequired,
}

export default Rating

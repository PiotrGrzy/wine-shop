import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Badge from "styles/Badge"

const StyledBadge = styled(Badge)`
  ${props => {
    if (props.small) {
      return {
        top: "5rem",
        height: "3rem",
        width: "12rem",
        fontSize: "2rem",
      }
    }
  }};
`

const DiscountBadge = ({ discount, small }) => {
  return (
    <StyledBadge small={small}>
      <p>- {discount} %</p>
    </StyledBadge>
  )
}

DiscountBadge.propTypes = {
  discount: PropTypes.number.isRequired,
  small: PropTypes.bool,
}

export default DiscountBadge

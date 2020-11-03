import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Badge from "../styles/Badge"

const StyledBestSellerBadge = styled(Badge)`
  top: 17rem;
  background-color: #d0b41c;
  ${props => {
    if (props.small) {
      return {
        top: "1rem",
        height: "3rem",
        width: "12rem",
        fontSize: "2rem",
      }
    }
  }};
`

const BestsellerBadge = ({ small }) => {
  return (
    <StyledBestSellerBadge small={small}>
      <p>Bestseller</p>
    </StyledBestSellerBadge>
  )
}

BestsellerBadge.propTypes = {
  small: PropTypes.bool,
}

export default BestsellerBadge

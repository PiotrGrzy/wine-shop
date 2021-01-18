import React from "react"
import PropTypes from "prop-types"
import { GrNext } from "react-icons/gr"
import { StyledArrow } from "../styles"

const BtnNext = ({ onClick }) => {
  return (
    <StyledArrow onClick={onClick} right={true}>
      <GrNext size="30" style={{ display: "block" }} />
    </StyledArrow>
  )
}

export default BtnNext

BtnNext.propTypes = {
  onClick: PropTypes.func,
}

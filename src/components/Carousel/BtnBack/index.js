import React from "react"
import PropTypes from "prop-types"
import { GrPrevious } from "react-icons/gr"
import { StyledArrow } from "../styles"

const BtnBack = ({ onClick }) => {
  return (
    <StyledArrow onClick={onClick} left={true}>
      <GrPrevious size="30" />
    </StyledArrow>
  )
}

export default BtnBack

BtnBack.propTypes = {
  onClick: PropTypes.func,
}

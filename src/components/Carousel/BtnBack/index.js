import React from "react"
import { GrPrevious } from "react-icons/gr"
import { StyledArrow } from "../styles"

const BtnBack = props => {
  const { className, onClick } = props
  return (
    <StyledArrow onClick={onClick} left={true}>
      <GrPrevious size="30" />
    </StyledArrow>
  )
}

export default BtnBack

import React from "react"
import { GrNext } from "react-icons/gr"
import { StyledArrow } from "../styles"

const BtnNext = props => {
  const { className, onClick } = props

  return (
    <StyledArrow onClick={onClick} right={true}>
      <GrNext size="30" style={{ display: "block" }} />
    </StyledArrow>
  )
}

export default BtnNext

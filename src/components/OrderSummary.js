import React from "react"
import styled from "styled-components"

const StyledSummary = styled.div`
  padding: 2rem;
  h5 {
    font-size: 3rem;
  }
`

const OrderSummary = () => {
  return (
    <StyledSummary>
      <h5>Delivery data</h5>
      <h5>Payment Data</h5>
      <h5>Delivery data</h5>
    </StyledSummary>
  )
}

export default OrderSummary

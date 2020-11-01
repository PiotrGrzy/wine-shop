import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  background-color: var(--primary-light);
`

const Footer = () => {
  return (
    <StyledFooter>
      <span>&copy; {new Date().getFullYear()}, bulit by Piotr Grzymowicz </span>
      <a href="mailto:piotr.grzymowicz1@gmail.com">Contact me</a>
    </StyledFooter>
  )
}

export default Footer

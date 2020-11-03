import React from "react"
import { StyledFooter } from "./styles"

const Footer = () => {
  return (
    <StyledFooter>
      <span>&copy; {new Date().getFullYear()}, bulit by Piotr Grzymowicz </span>
      <a href="mailto:piotr.grzymowicz1@gmail.com">Contact me</a>
    </StyledFooter>
  )
}

export default Footer

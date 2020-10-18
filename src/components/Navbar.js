import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.nav`
  padding: 1rem;
  background-color: var(--dark-purple);

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: var(--misty-rose);
  transition: color 0.2s;
  text-transform: capitalize;
  border-bottom: 1px solid transparent;
  &:hover {
    color: var(--white);
  }
  &[aria-current] {
    color: var(--white);
    border-bottom: 1px solid var(--white);
  }
`

const NAVBAR_LINKS = [
  { name: "home", path: "/" },
  { name: "red wines", path: "/wines/reds" },
  { name: "white wines", path: "/wines/whites" },
  { name: "sparkling wines", path: "/wines/sparkling" },
]

const Navbar = () => {
  return (
    <StyledNav>
      <div className="container">
        {NAVBAR_LINKS.map(link => {
          return (
            <StyledLink key={link.path} to={link.path}>
              {link.name}
            </StyledLink>
          )
        })}
      </div>
    </StyledNav>
  )
}

export default Navbar

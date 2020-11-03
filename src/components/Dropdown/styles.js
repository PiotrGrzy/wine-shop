import styled from "styled-components"

export const StyledDropdown = styled.div`
  position: relative;
  color: var(--secondary-light);
`

export const StyledToggler = styled.button`
  outline: none;
  display: block;
  font-size: 2rem;
  color: ${({ color }) => color};
  transition: color 0.2s;
  text-transform: capitalize;
  border-bottom: 1px solid transparent;
  padding: 0.5rem 0;
  &:hover {
    color: var(--white);
  }
  &[aria-current] {
    color: var(--white);
    border-bottom: 1px solid var(--white);
  }
`

export const Links = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: min(80rem, 90vw);
  padding: 1rem;

  background-color: var(--primary-light);
`

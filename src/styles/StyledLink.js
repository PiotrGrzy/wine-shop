import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  display: block;
  font-size: 2rem;
  color: ${({ color }) => color};
  transition: color 0.2s;
  text-transform: capitalize;
  border-bottom: 1px solid transparent;

  &:hover {
    color: var(--white);
    border-bottom: 1px solid var(--white);
  }
  &[aria-current] {
    color: var(--white);
    border-bottom: 1px solid var(--white);
  }
`
export default StyledLink

import styled from "styled-components"
import { GiWineBottle } from "react-icons/gi"

export const StyledIcon = styled(GiWineBottle)`
  color: var(--secondary-light);
`

export const StyledTopNav = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 2rem;
  align-items: center;
  font-size: 1.6rem;
  color: var(--secondary-light);
  padding: 1rem;
  h1 {
    font-size: 2.8rem;
  }
  .cart {
    position: relative;
    font-size: 3.3rem;
    grid-column: 3;
  }
  .cart-counter {
    position: absolute;
    font-size: 1.4rem;
    font-weight: 700;
    top: 0.7rem;
    right: 1rem;
    color: var(--primary);
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin: 0 2rem;
  }
`

import styled from "styled-components"

export const StyledOrderItem = styled.li`
  display: grid;
  grid-template-columns: 10rem 1fr repeat(6, 5rem);
  align-items: center;
  background-color: var(--white);
  font-size: 1.6rem;
  border: 1px solid var(--secondary-light);
  img {
    height: 10rem;
    width: 100%;
    object-fit: contain;
  }
  span {
    text-align: center;
  }
  @media (max-width: 499px) {
    grid-template-columns: 4rem 1fr repeat(6, 4rem);
  }
`
export const StyledOrderButton = styled.button`
  outline: none;
  &:focus,
  &:active {
    border: 1px solid var(--primary-light);
  }
`

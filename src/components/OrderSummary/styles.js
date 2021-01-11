import styled from "styled-components"

export const StyledSummary = styled.div`
  flex: 4;
  padding: 2rem;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  h5 {
    font-size: 3rem;
  }

  @media (max-width: 499px) {
    padding: 1rem;
  }
`

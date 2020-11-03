import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--primary-light);
  background: -webkit-linear-gradient(
    to right,
    var(--primary),
    var(--primary-light),
    var(--primary)
  );
  background: linear-gradient(
    to right,
    var(--primary),
    var(--primary-light),
    var(--primary)
  );
  h1 {
    font-size: 2.4rem;
    color: var(--secondary-light);
  }
`

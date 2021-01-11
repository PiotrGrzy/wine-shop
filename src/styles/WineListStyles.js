import styled from "styled-components"

const WineListStyles = styled.ul`
  background-color: var(--bg-backdrop-white);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 399px) {
    padding: 0;
  }
`

export default WineListStyles

import styled from "styled-components"

const WineListStyles = styled.ul`
  background-color: rgba(255, 255, 255, 0.6);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`

export default WineListStyles

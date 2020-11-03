import styled from "styled-components"

export const StyledWrapper = styled.div`
  margin: 2rem 0;
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-size: 1.8rem;
    vertical-align: center;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
  }
`

export const StyledButton = styled.button`
  padding: 0.5rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  color: var(--white);
  background-color: ${props =>
    props.disabled ? "lightgrey" : "var(--primary)"};
  cursor: ${props => (props.disabled ? "auto" : "pointer")};
  &:hover {
    background-color: ${props =>
      props.disabled ? "lightgrey" : "var(--secondary)"};
  }
  font-size: 2rem;
  border-radius: 5px;
`

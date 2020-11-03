import styled from "styled-components"

export const StyledSortingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  input {
    border: none;
    outline: none;
    font-size: 1.6rem;
    padding: 0.5rem;
    margin-left: 1rem;
  }
  label {
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    padding: 0.5rem;
  }
`
export const StyledTitle = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: var(--bg-backdrop-white);
  text-transform: capitalize;
  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    display: block;
  }
  p {
    margin-top: 1rem;
    font-size: 1.8rem;
  }
`

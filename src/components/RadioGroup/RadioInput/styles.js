import styled from "styled-components"

export const StyledRadioButton = styled.label`
  display: grid;
  grid-template-columns: 1fr 7rem;
  align-items: center;
  align-content: center;
  height: 5rem;
  position: relative;
  padding: 1rem;
  padding-left: 4rem;
  margin: 1rem;
  cursor: pointer;
  font-size: 1.8rem;
  user-select: none;
  background-color: var(--white);
  border: 2px solid
    ${props => (props.active ? "var(--primary)" : "var(--grey)")};
  border-radius: 5px;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    height: 1.8rem;
    width: 1.8rem;
    background-color: #eee;
    border-radius: 50%;
  }
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  input:checked ~ .checkmark {
    background-color: var(--primary);
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: white;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
`

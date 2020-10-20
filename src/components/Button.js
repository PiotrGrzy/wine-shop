import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 14rem;
  height: 4rem;
  margin: 2rem 0;
  border: 2px solid var(--dark-purple);
  font-size: 1.6rem;
  cursor: pointer;
  span {
    position: relative;
    color: transparent;
    background-image: linear-gradient(
      90deg,
      var(--wisteria) 0%,
      var(--wisteria) 50%,
      var(--dark-purple) 50%,
      var(--dark-purple) 100%
    );
    background-repeat: repeat;
    background-size: 200%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    background-clip: text;
    transition: background-position 300ms;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-purple);
    transform-origin: 100% 0;
    transform: scale3d(0, 1, 1);
    transition: transform 300ms;
  }
  &:hover {
    span {
      background-position: 0 0;
    }

    &::before {
      transform-origin: 0 0;
      transform: scale3d(1, 1, 1);
    }
  }
`

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  )
}

export default Button

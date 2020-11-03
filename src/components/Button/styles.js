import styled from "styled-components"

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 14rem;
  height: 4rem;
  margin: 1rem 0;
  border: 2px solid var(--primary);
  font-size: 1.6rem;
  cursor: pointer;
  span {
    position: relative;
    color: transparent;
    background-image: linear-gradient(
      90deg,
      var(--white) 0%,
      var(--white) 50%,
      var(--primary) 50%,
      var(--primary) 100%
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
    background: var(--primary);
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

import styled from "styled-components"

export const StyledArrow = styled.div`
  background-color: var(--bg-backdrop-white);
  opacity: 0.7;
  padding: 1rem;
  position: absolute;
  z-index: 100;
  top: 50%;
  display: block;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  cursor: pointer;
  ${props => (props.left ? "left:-35px;" : "")}
  ${props => (props.right ? "right:-35px;" : "")}

  :hover {
    background-color: var(--secondary);
  }

  ::before {
    display: none;
  }

  /* .slick-prev {
    left: 35px;
  }

  .slick-next {
    right: -35px;
  } */
`

import styled from "styled-components"

const Badge = styled.div`
  position: absolute;
  top: ${({ small }) => (small ? "4rem" : "12rem")};
  left: -1rem;
  z-index: 2;

  width: 16rem;
  height: 4rem;
  background-color: #11b011;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border: none;
`

export default Badge

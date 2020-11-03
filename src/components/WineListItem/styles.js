import styled from "styled-components"
import { Link } from "gatsby"

export const LinkTitle = styled(Link)`
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: right;
`
export const WineCard = styled.li`
  position: relative;
  height: 40rem;
  display: grid;
  padding: 2rem;
  grid-template-columns: 75px 1fr;
  gap: 3rem;
  border: 1px solid var(--secondary-light);
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  background-color: var(--white);
  .image-wrapper {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .info-wrapper {
    display: grid;
    grid-template-rows: 1fr 30px 30px 30px 60px;
    row-gap: 1rem;
    align-items: center;
    justify-items: right;
    color: var(--primary);
  }

  .price {
    width: 100%;
    font-size: 2rem;
    text-align: right;
    font-weight: bold;
  }
  .location {
    font-size: 1.6rem;
  }
`

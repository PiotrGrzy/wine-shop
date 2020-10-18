import styled from "styled-components"

export const WineCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 1fr 1.5fr 1fr;
  grid-template-rows: repeat(8, 10rem);
  align-items: stretch;

  margin: 2rem 1rem;

  border-radius: 1rem;
  border-top: 1rem solid var(--dark-byzantium);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  color: var(--dark-purple);
  background-color: var(--white);

  & > * {
    box-sizing: content-box;
    border: 1px solid #ddd;
    margin: 0 -1px -1px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    display: block;
    border: none;
    width: 90%;
    height: 90%;
    margin: auto;
    object-fit: contain;
    grid-area: 2/1/8/2;
  }

  .heading {
    grid-area: 1/1/2/-1;
    text-align: center;
    border-left: none;
    border-right: none;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.8rem;
      margin-top: 2rem;
    }
  }

  .location {
    grid-area: 2/2/3/-1;
    text-align: center;
    padding: 2rem;
    font-size: 1.8rem;
  }
  .description {
    grid-area: 3/2/5/-1;
    font-size: 1.4rem;
    padding: 0 2rem;
    line-height: 2rem;
  }
  .rating {
    grid-area: 5/2/6/-1;
    font-size: 2rem;
  }
  .price {
    grid-area: 6/2/7/-1;
    font-size: 3rem;
    text-align: center;
    span {
      display: inline-block;
      font-size: 2rem;
      margin: 0 1rem;
    }
  }
  .input {
    grid-area: 7/3/8/4;
    //  max-width: 10rem;
    border-left: none;
  }
`

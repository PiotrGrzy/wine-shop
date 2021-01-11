import styled from "styled-components"

export const StyledAddress = styled.div`
  background-color: var(--white);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: left;
  align-items: center;
  grid-template-areas:
    "title title"
    "name country"
    "city street"
    "home postal-code";
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 5px;
  span {
    font-weight: 400;
  }
  .title {
    grid-area: title;
    font-size: 2.2rem;
    font-weight: 400;
  }
  .name {
    grid-area: name;
  }
  .country {
    grid-area: country;
  }
  .city {
    grid-area: city;
  }
  .street {
    grid-area: street;
  }
  .home {
    grid-area: home;
  }
  .postal-code {
    grid-area: postal-code;
  }

  @media (max-width: 699px) {
    padding: 1rem;
  }
`

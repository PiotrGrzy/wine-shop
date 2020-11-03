import styled from "styled-components"
import { CarouselProvider } from "pure-react-carousel"

export const StyledCarousel = styled(CarouselProvider)`
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .scroll-btn {
    font-size: 3rem;
    background-color: rgba(200, 200, 200, 0.5);
    color: white;
    height: 100%;
  }
`

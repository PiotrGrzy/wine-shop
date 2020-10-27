import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"
import WineListItem from "./WineListItem"

const StyledCarousel = styled(CarouselProvider)`
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

const WineCarousel = ({ items, total }) => {
  console.log(typeof total)
  console.log(total)
  return (
    <StyledCarousel
      naturalSlideWidth={300}
      naturalSlideHeight={400}
      totalSlides={30}
      visibleSlides={3}
      interval={3000}
      isPlaying={true}
      isIntrinsicHeight
      step={3}
      infinite={true}
    >
      <ButtonBack className="scroll-btn">
        <GrPrevious />
      </ButtonBack>
      <Slider>
        {items.map((item, i) => (
          <Slide index={i} key={item.id}>
            <WineListItem wine={item} />
          </Slide>
        ))}
      </Slider>
      <ButtonNext className="scroll-btn">
        <GrNext />
      </ButtonNext>
    </StyledCarousel>
  )
}

WineCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
}

export default WineCarousel

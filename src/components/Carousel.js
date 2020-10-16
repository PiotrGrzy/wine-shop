import React from "react"
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

const Carousel = ({ items }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={250}
      naturalSlideHeight={400}
      totalSlides={30}
      visibleSlides={2}
      interval={3000}
      isPlaying={true}
      isIntrinsicHeight
      className="carousel"
    >
      <ButtonBack className="carousel__btn">
        <GrPrevious />
      </ButtonBack>
      <Slider>
        {items.map((item, i) => (
          <Slide index={i}>
            <WineListItem wine={item} />
          </Slide>
        ))}
      </Slider>
      <ButtonNext className="carousel__btn">
        <GrNext />
      </ButtonNext>
    </CarouselProvider>
  )
}

export default Carousel

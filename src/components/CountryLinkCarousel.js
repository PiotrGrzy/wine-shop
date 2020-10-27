import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import StyledLink from "../styles/StyledLink"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

const CountryLink = styled(StyledLink)`
  font-size: 1.4rem;
  margin: 0 0.5rem;
`

const StyledCarousel = styled(CarouselProvider)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  .scroll-btn {
    font-size: 2.2rem;

    color: white;
  }
`

const CountryLinkCarousel = ({ links }) => {
  return (
    <div>
      <StyledCarousel
        naturalSlideWidth={125}
        naturalSlideHeight={25}
        totalSlides={links.length}
        interval={3000}
        isPlaying={true}
        isIntrinsicHeight
        isPlaying={true}
        isIntrinsicHeight
        infinite={true}
      >
        <ButtonBack className="scroll-btn">{"<<<"}</ButtonBack>
        <Slider>
          {links.map(link => (
            <Slide key={link}>
              <CountryLink to={`/wines/${link.slice(0, -1)}`}>
                {link}
              </CountryLink>
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="scroll-btn">{">>>"}</ButtonNext>
      </StyledCarousel>
    </div>
  )
}

CountryLinkCarousel.propTypes = {
  links: PropTypes.array.isRequired,
}
export default CountryLinkCarousel

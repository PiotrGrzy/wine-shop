import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import WineListItem from "components/WineListItem"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BtnBack from "./BtnBack"
import BtnNext from "./BtnNext"

const carouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <BtnNext />,
  prevArrow: <BtnBack />,
}

const Carousel = ({ items }) => {
  return (
    <Slider {...carouselSettings}>
      {items.map(item => (
        <WineListItem wine={item} key={item.id} />
      ))}
    </Slider>
  )
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Carousel

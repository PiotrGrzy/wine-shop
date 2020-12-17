import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import WineListItem from "components/WineListItem"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}

const Carousel = ({ items }) => {
  return (
    <Slider {...settings}>
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

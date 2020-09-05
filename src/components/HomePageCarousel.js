import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HomePageCarousel.css'

export default function HomePageCarousel (props) {
  const { ShopHomepage } = props
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel
      className='caro'
      activeIndex={index}
      onSelect={handleSelect}
      touch
      pause={false}
      controls={false}
      fade
      indicators={false}
      keyboard
      interval={3000}
      wrap={false}
    >
      {ShopHomepage.map((item, i) => {
        return (
          <Carousel.Item item={item} key={i} className='carousel-item'>
            <img className='img-responsive' src={item.image} alt={item.title} />

            <Carousel.Caption />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

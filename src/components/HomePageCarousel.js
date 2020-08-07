import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function HomePageCarousel (props) {
  const { ShopHomepage } = props
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} touch pause={false} controls={false} fade indicators={false} keyboard interval={3000} wrap={false}>
      {ShopHomepage.map((item, i) => {
        return (
          <Carousel.Item item={item} key={i}>
            <img
              className='d-block w-100'
              src={item.image}
              alt={item.title}
              style={{ maxWidth: 850, maxHeight: 320, width: '100%', height: '80%' }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      }

      )}
    </Carousel>

  )
}

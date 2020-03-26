import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { imageArray } from '../assets/HotelsDetails'

export function ControlledCarousel (props) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {imageArray.map(arrayItem => {
          const sortByOptionValue = arrayItem[arrayItem]
          return (
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={arrayItem}
                alt='First slide'
                key={sortByOptionValue}

              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

          )
        })}
      </Carousel>
    </>
  )
}; export default ControlledCarousel

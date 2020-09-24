import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const TravelItemsCaro = (props) => {
  const images = props.images
  return (
    <Carousel>
      {images.map((image, i) => {
        return (

          <Carousel.Item image={image} key={i}>
            <img
              className='d-block w-100'
              src={image}
              alt='slide'
              style={{ maxHeight: 318 }}
            />

          </Carousel.Item>
        )
      })}

    </Carousel>
  )
}

export default TravelItemsCaro

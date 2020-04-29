import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const Test = (props) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const hotelsArray = props.hotels
  console.log(hotelsArray)

  const imageSize = { width: '100%', height: '500px' }
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {(hotelsArray) => {
          hotelsArray.map(hotel => {
            console.log(hotel)
            return hotel.images.map((imgArray, i) => {
              console.log(imgArray, i)
              const pathy = imgArray.path
              console.log(pathy)

              return (
                <Carousel.Item key={imgArray} style={imageSize} className='iconCon'>

                  <img
                    className='d-block w-100 '
                    src={`http://photos.hotelbeds.com/giata/xl/${pathy}`}
                    alt='Hotel Pictures'

                  />

                  <Carousel.Caption>
                    <h3>{imgArray.order}</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

              )
            })
          }
          )
        }}
      </Carousel>
    </>
  )
}

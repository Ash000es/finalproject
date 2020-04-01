import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HotelDetails from '../HotelsDetails'
import { hardHotelObject } from '../assets/HardCode'

export const ControlledCarousel1 = (props) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const imagesLinks = HotelDetails.hotel.images
  // console.log(imagesLinks)
  const imageArray = []
  const textArray = []

  function pushImages (arr) {
    arr.map(subarr => {
      // console.log(subarr)
      const imageLink = `http://photos.hotelbeds.com/giata/small/${subarr.path}`
      const imageText = subarr.type.description.content
      imageArray.push(imageLink)
      // console.log(imageLink)
    })
  }
  pushImages(imagesLinks)
  const imageSize = { width: '250px', height: 'auto' }
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {imageArray.map((arrayItem) => {
          { /* if (arrayItem.roomCode === hardHotelObject.rooms[0].code) { */ }
          return (
            <Carousel.Item key={arrayItem} style={imageSize}>
              <img
                className='d-block w-100'
                src={arrayItem}
                alt='Hotel Pictures'
              />
              <Carousel.Caption>

                <p />
              </Carousel.Caption>
            </Carousel.Item>

          )
        }
        )}
      </Carousel>
    </>
  )
}; export default ControlledCarousel1

import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HotelDetails from '../HotelsDetails'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import './HotelPCarousel.css'

export function ControlledCarousel (props) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const imagesLinks = props.hotels
  console.log(imagesLinks)
  // console.log(imagesLinks)
  const imageArray = []
  const textArray = []

  function pushImages (arr) {
    arr.map(subarr => {
      // console.log(subarr)
      const imageLink = `http://photos.hotelbeds.com/giata/${subarr.path}`
      const imageText = subarr.type.description.content
      imageArray.push(imageLink)
      // console.log(imageLink)
    })
  }
  pushImages(imagesLinks)
  const imageSize = { width: '100%', height: '500px' }
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {imageArray.map((arrayItem) => {
          return (
            <Carousel.Item key={arrayItem} style={imageSize} className='iconCon'>

              <img
                className='d-block w-100 '
                src={arrayItem}
                alt='Hotel Pictures'

              />
              <i className='iconHeart'><FavoriteIcon /></i>
              <i className='iconHeart'><FavoriteBorderIcon /></i>

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

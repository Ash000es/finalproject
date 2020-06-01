import React, { useState, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HotelPCarousel.css'
import { MyProvider, ProjectContext } from '../providers/Provider'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { getSmallPictures, removeDuplicates } from '../Helper/Helper'
import { masterLinkSmall } from '../Helper/Constants'

export const SearchResultsCarousel = (props) => {
  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const readyImages = props.hotel.images
  console.log(readyImages, 'ready images')

  const imageSize = { width: '250px', height: '250px' }
  console.log('searchresultscarousel')
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} style={imageSize}>

        {
          readyImages.map(image => {
            const newImage = getSmallPictures(image, masterLinkSmall)

            return (
              <Carousel.Item key={Math.random()} image={image}>

                <img
                  className='d-block w-100 '
                  src={newImage.path}
                  alt='Hotel Pictures'

                />

                <Carousel.Caption>
                  <h3>{image.order}</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  {/* <i className='iconHeart'><FavoriteIcon /></i> */}
                  {/* <i className='iconHeart'><FavoriteBorderIcon /></i> */}
                </Carousel.Caption>
              </Carousel.Item>

            )
          }
          )
        }
      </Carousel>
    </>
  )
}

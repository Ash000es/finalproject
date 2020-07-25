import React, { useState, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HotelPCarousel.css'
import { MyProvider, ProjectContext } from '../providers/Provider'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { getLargePictures } from '../Helper/Helper'
import { masterLinkLarge } from '../Helper/Constants'

export const HotelCarousel = (props) => {
  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const imagesArray = props.currentSelection.images
  const readyImagesArray = getLargePictures(imagesArray, masterLinkLarge)
  // console.log(readyImagesArray, 'bigimages')
  const imageSize = { width: '100%', height: '500px' }
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {
          readyImagesArray.map((image, i) => {
            return (
              <Carousel.Item key={i} style={imageSize} className='iconCon'>

                <img
                  className='d-block w-100 '
                  src={image.path}
                  alt='Hotel Pictures'

                />
                <i className='iconHeart'><FavoriteIcon /></i>
                <i className='iconHeart'><FavoriteBorderIcon /></i>
                <Carousel.Caption>
                  <h3>{image.order}</h3>

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

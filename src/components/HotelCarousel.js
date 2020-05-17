import React, { useState, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HotelPCarousel.css'
import { MyProvider, ProjectContext } from '../Helper/Provider'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { getLargePictures } from '../Helper/Helper'
import { masterLinkLarge } from '../Helper/Constants'

export const HotelCarousel = () => {
  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const imagesArray = project.results.map(H => H.images)
  const readyImagesArray = getLargePictures(imagesArray, masterLinkLarge)
  const imageSize = { width: '100%', height: '500px' }
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {
          readyImagesArray.map((image) => {
            return (
              <Carousel.Item key={image} style={imageSize} className='iconCon'>

                <img
                  className='d-block w-100 '
                  src={image.path}
                  alt='Hotel Pictures'

                />
                <i className='iconHeart'><FavoriteIcon /></i>
                <i className='iconHeart'><FavoriteBorderIcon /></i>
                <Carousel.Caption>
                  <h3>{image.order}</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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

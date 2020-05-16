import React, { useState, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HotelPCarousel.css'
import { MyProvider, ProjectContext } from './Provider'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { getSmallPictures } from '../components/Helper'
import { masterLinkSmall } from '../components/Constants/Constants'

export const SearchResultsCarousel = () => {
  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const hotelsArray = project.results
  const readyImages = hotelsArray.map(H => H.images1)
  // className='iconCon'
  // style={imageSize}
  const readyImagesArray = getSmallPictures(readyImages, masterLinkSmall)
  // const imageSize = { width: '250px', height: '250px' }
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {
          readyImagesArray.map(image => {
            return (
              <Carousel.Item key={image} image={image}>

                <img
                  className='d-block w-100 '
                  src={image.path}
                  alt='Hotel Pictures'

                />
                {/* <i className='iconHeart'><FavoriteIcon /></i> */}
                {/* <i className='iconHeart'><FavoriteBorderIcon /></i> */}
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

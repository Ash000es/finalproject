import React, { useState, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HotelPCarousel.css'
import { MyProvider, ProjectContext } from '../Helper/Provider'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { getSmallPictures } from '../Helper/Helper'
import { masterLinkSmall } from '../Helper/Constants'

export const SearchResultsCarousel = (props) => {
  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  // const hotelsArray = project.results
  const readyImages = props.hotel.images

  // className='iconCon'

  const readyImagesArray = getSmallPictures(readyImages, masterLinkSmall)
  // console.log(readyImagesArray, 'iam to be mapped')
  const imageSize = { width: '250px', height: '250px' }
  console.log('searchresultscarousel')
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} style={imageSize}>

        {
          readyImagesArray.map(image => {
            return (
              <Carousel.Item key={image.visualOrder} image={image}>

                <img
                  className='d-block w-100 '
                  src={image.path}
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

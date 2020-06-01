import React, { useState, useContext, useMemo } from 'react'
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
  const [newimages, seNewImages] = useState(props.images)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const handleImageError = (e) => {
    const newbei = newimages.filter((image, e) => {
      return image.path !== e
    })
    seNewImages(newbei)
  }

  const imageSize = { width: '250px', height: '250px' }
  console.log('searchresultscarousel')
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} style={imageSize} interval={null} touch pause='hover'>

        {
          newimages.map((image) => {
            const imagLink = image.path
            return (
              <Carousel.Item key={image.path} image={image}>

                <img
                  className='d-block w-100 '
                  src={imagLink}
                  alt='Hotel Pictures'
                  onError={(e) => handleImageError(e.target.src)}
                />

                <Carousel.Caption>

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

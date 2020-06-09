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
  const [newimages, setNewImages] = useState(props.images)
  const [style, setStyle] = useState({ width: '250px', height: '250px', display: 'show' })

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const handleImageError = (i) => {
    const filteredImages = [...newimages]
    filteredImages.splice(i, 1)

    setNewImages(filteredImages)
    // const style1 = e.target
    // console.log(style1)
    // setStyle({ ...style, display: 'none' })
    // const newbei = newimages.filter((image, e) => {
    //   return image.path !== e
    // })
    // setNewImages(newbei)
  }

  console.log('searchresultscarousel')
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} touch pause='hover'>

        {
          newimages.map((image, i) => {
            const imagLink = image.path
            return (
              <Carousel.Item key={image.path} image={image}>

                <img
                  className='d-block w-100 '
                  src={imagLink}
                  alt='Hotel Pictures'
                  style={style}
                  onError={() => handleImageError(i)}
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

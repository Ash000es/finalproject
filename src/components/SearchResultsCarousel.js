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
  const [style, setStyle] = useState({ width: '340px', height: '250px', display: 'show' })
  // console.log(newimages.length, 'before')
  const testinimages = removeDuplicates(newimages)
  const [isloading, setIsLoading] = useState(true)
  // console.log(testinimages.length, 'after')

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const handleImageError = (i) => {
    const filteredImages = [...newimages]
    filteredImages.splice(i, 1)

    setNewImages(filteredImages)
  }

  // console.log('searchresultscarousel')
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} touch pause='hover'>

        {
          newimages.map((image, i) => {
            const imagLink = image.path
            return (
              <Carousel.Item key={i} image={image}>

                <img
                  className='d-block w-100 '
                  src={imagLink}
                  alt='Hotel Pictures'
                  style={style}
                  onLoad={() => setIsLoading(false)}
                  onError={() => handleImageError(i)}
                />
                {isloading && 'Loading'}
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

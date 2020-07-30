import React, { useState, useContext, useMemo } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HotelPCarousel.css'
import { MyProvider, ProjectContext } from '../providers/Provider'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { getSmallPictures, removeDuplicates } from '../Helper/Helper'
import { masterLinkSmall } from '../Helper/Constants'

export const SearchResultsCarousel = (props) => {
  console.log(props.currentSelection, 'current props')
  const style2 = { width: '340px', height: '250px', display: 'show' }
  const style1 = { width: '100%', height: '80%' }
  let styleToShow
  const ValueToMap = () => {
    if (props.currentSelection) {
      styleToShow = style1
      return props.currentSelection
    } else {
      styleToShow = style2
      return props.images
    }
  }
  const finalValue = ValueToMap(props)

  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)
  const [newimages, setNewImages] = useState(finalValue)

  const [isloading, setIsLoading] = useState(true)

  console.log(newimages, 'and here')

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const handleImageError = (i) => {
    console.log('filtering...', i)
    const filteredImages = [...newimages]
    filteredImages.splice(i, 1)

    setNewImages(filteredImages)
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} style={styleToShow} interval={null} touch pause='hover'>

        {

          newimages.map((image, i) => {
            const imagLink = image.path

            return (
              <Carousel.Item key={i} image={image}>

                <img
                  className='d-block w-100'
                  src={imagLink}
                  alt='Hotel Pictures'

                  onLoad={() => setIsLoading(false)}
                  onError={() => handleImageError(i)}
                />
                {isloading && 'Loading'}
                <i className='iconHeart'><FavoriteIcon /></i>
                <i className='iconHeart'><FavoriteBorderIcon /></i>
                <Carousel.Caption>

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

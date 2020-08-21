import React, { useState, useContext, useMemo } from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import './HotelPCarousel.css'
import { MyProvider, ProjectContext } from '../providers/Provider'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { getSmallPictures, removeDuplicates } from '../Helper/Helper'
import { masterLinkSmall } from '../Helper/Constants'
import './HotelCardSearch.css'

export const SearchResultsCarousel = (props) => {
  const styleToShow = props.currentSelection
  console.log(styleToShow, 'styletoshow')
  const ValueToMap = () => {
    if (props.currentSelection) {
      return props.currentSelection
    } else {
      return props.images
    }
  }
  const finalValue = ValueToMap(props)

  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)
  const [newimages, setNewImages] = useState(finalValue)

  const [isloading, setIsLoading] = useState(true)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const handleImageError = (i) => {
    const filteredImages = [...newimages]
    filteredImages.splice(i, 1)

    setNewImages(filteredImages)
  }

  return (

    <div className={styleToShow && styleToShow.length ? 'outer-wrapper-hotelpage' : 'outer-wrapper'}>
      <div className={styleToShow && styleToShow.length ? 'frame-hotelpage' : 'frame'}>

        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} touch pause='hover'>

          {

            newimages.map((image, i) => {
              const imagLink = image.path

              return (
                <Carousel.Item key={i} image={image} id={styleToShow && styleToShow.length ? 'frame-hotelpage' : ''}>

                  <img
                    // className='d-block w-100'
                    src={imagLink}
                    alt='Hotel Pictures'
                    // style={style}
                    id='caroImage'

                    onLoad={() => setIsLoading(false)}
                    onError={() => handleImageError(i)}
                  />
                  {isloading && 'Loading'}
                  {/* <div style={{ backgroundImage: imagLink, backgroundSize: 'cover', borderRadius: 0 }} /> */}
                  {/* <i className='iconHeart'><FavoriteIcon /></i>
                  <i className='iconHeart'><FavoriteBorderIcon /></i> */}

                </Carousel.Item>

              )
            }
            )
          }
        </Carousel>
      </div>

    </div>

  )
}

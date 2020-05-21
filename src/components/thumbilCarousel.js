import React, { useContext, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { MyProvider, ProjectContext } from '../Helper/Provider'
import { getRoomPicture } from '../Helper/Helper'
import { masterLinkSmall } from '../Helper/Constants'

const RoomCarousel = (props) => {
  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)
  const [iconClicked, setIconClicked] = useState(false)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const imagesArray = props.currentSelection.images
  const readyImagesArray = getRoomPicture(imagesArray, props.room, masterLinkSmall)
  // passing it here as argumnet is ok? see helper
  return (

    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {iconClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        {imagesArray.map(imageObject => {
          return (
            <Carousel.Item key={imageObject} style={{ height: '250px', width: '200px' }}>
              <img
                className='d-block w-100'
                alt='Hotel Pictures'
                src={imageObject.path}
                style={{ height: '250px', width: '200px' }}
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>

          )
        }

        )}
      </Carousel>
    </>
  )
}; export default RoomCarousel

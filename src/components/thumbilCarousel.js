import React, { useContext, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { MyProvider, ProjectContext } from './Provider'
import { getRoomPicture } from './Helper'
import { masterLinkSmall } from '../components/Constants/Constants'

const RoomCarousel = (props) => {
  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const imagesArray = project.results.map(H => H.images)
  const readyImagesArray = getRoomPicture(imagesArray, masterLinkSmall)
  return (

    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <FavoriteIcon />
        <FavoriteBorderIcon />
        {imagesArray.map(imageObject => {
          return (
            <Carousel.Item key={imageObject} style={{ height: '250px', width: '200px' }}>
              <img
                className='d-block w-100'
                alt='Hotel Pictures'
                src={readyImagesArray}
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

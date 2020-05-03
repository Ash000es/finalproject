import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { MyProvider, ProjectContext } from '../Provider/Provider'

const ControlledCarousel1 = (props) => {
  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const [rooms] = project.results.hotels.rooms

  return (

    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <FavoriteIcon />
        <FavoriteBorderIcon />
        {rooms.map(room => {
          return (
            <Carousel.Item key={room} style={{ height: '250px', width: '200px' }}>
              <img
                className='d-block w-100'
                alt='Hotel Pictures'
                src={`http://photos.hotelbeds.com/giata/medium/${getRoomPicture()}`}
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
}; export default ControlledCarousel1

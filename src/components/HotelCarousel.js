import React, { useState, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HotelPCarousel.css'
import { MyProvider, ProjectContext } from './Provider'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

export const GetImages = () => {
  const [index, setIndex] = useState(0)
  const { project, setProject } = useContext(ProjectContext)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const hotelsArray = project.hotels
  // console.log(hotelsArray)

  const imageSize = { width: '100%', height: '500px' }
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {
          hotelsArray.map(hotel => {
            console.log(hotel)
            hotel.images.map((imgArray) => {
              const pathy = []
              console.log(imgArray)
              pathy.push(imgArray.path)
              console.log(pathy)

              return (
                <Carousel.Item key={imgArray} style={imageSize} className='iconCon'>

                  <img
                    className='d-block w-100 '
                    src={`http://photos.hotelbeds.com/giata/xl/${pathy}`}
                    alt='Hotel Pictures'

                  />
                  <i className='iconHeart'><FavoriteIcon /></i>
                  <i className='iconHeart'><FavoriteBorderIcon /></i>
                  <Carousel.Caption>
                    <h3>{imgArray.order}</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

              )
            })
          }
          )
        }
      </Carousel>
    </>
  )
}

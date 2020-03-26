import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HotelDetails from '../assets/HotelsDetails'

function ControlledCarousel () {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} HotelDetails={HotelDetails}>
        {imageArray.map(arrayItem => {
          return (
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={arrayItem}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

          )
        })}
      </Carousel>
    </>
  )
} export default HotelPCarousel
// export default HotelPCarousel

/* render(<ControlledCarousel />) */

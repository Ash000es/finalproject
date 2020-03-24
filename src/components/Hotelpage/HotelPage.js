import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HotelDetail from '../assets/HotelsDetails'
import Table from 'react-bootstrap/Table'

// on click we need content api call to pull the hotel information ( des+img)
// we should have made the price and availability call before in search results so click on book will take you to the hotel page

const HotelPage = ({ HotelDetail }) => {
  return (
    <div>
      <p>This hotel have spceial offer for you</p>
      <p>{HotelDetail.hotel.name}</p>
      <p>{HotelDetail.hotel.address}
        {HotelDetail.hotel.postalcode}
        {HotelDetail.hotel.city}
      </p>
      <p />
      <button variant='primary'>Book</button>
      <p />
      <button variant='primary'>Book</button>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src=''
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://img.nextpax.com/core/973/9733284a/4b25/445e/b397/5cdd540abe42/9733284a-4b25-445e-b397-5cdd540abe42.jpg'
            alt='Secound slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://img.nextpax.com/core/e39/e3940799/3440/4c2b/aff1/cd61ff711bf5/e3940799-3440-4c2b-aff1-cd61ff711bf5.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div>amenities:
        <ul style={{ listStyleType: 'none' }}>{hotel.amenities.map(item =>
          <li key={item.title}>{item.icon}{item.title}</li>
        )}
        </ul>
        <img src='' alt='TA' />
      </div> */}
      <p>key facts</p>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Adults</th>
            <th>Included</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img /></td>
            <td>1</td>
            <td>Free Wifi</td>
            <td>220$<button>Book Now</button></td>
          </tr>

        </tbody>
        <tbody>
          {/* <Extras /> */}
        </tbody>
      </Table>
    </div>

  )
}
export default HotelPage

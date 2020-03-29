import React from 'react'
import HotelDetails, { imageArray } from '../HotelsDetails'
import ControlledCarousel from '../HotelPCarousel/HotelPCarousel'
import Table from 'react-bootstrap/Table'

// on click we need content api call to pull the hotel information ( des+img)
// we should have made the price and availability call before in search results so click on book will take you to the hotel page
const HotelPage = () => {
  return (
    <>
      <h4>This hotel have spceial offer for you</h4>
      <p>{HotelDetails.hotel.name.content}</p>
      <p>{HotelDetails.hotel.address.content},
        {HotelDetails.hotel.postalCode},
        {HotelDetails.hotel.city.content} show on map
      </p>
      <button variant='primary'>Book</button>
      <button variant='primary'>Book</button>
      <ControlledCarousel />

      {/* <div>amenities:
        <ul style={{ listStyleType: 'none' }}>{hotel.amenities.map(item =>
          <li key={item.title}>{item.icon}{item.title}</li>
        )}
        </ul>
        <img src='' alt='TA' />
      </div> */}
      <p>key facts:
        {HotelDetails.hotel.description.content}
      </p>
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
    </>

  )
}; export default HotelPage

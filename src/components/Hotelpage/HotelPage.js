import React from 'react'
import HotelDetails from '../HotelsDetails'
import ControlledCarousel from '../HotelPCarousel/HotelPCarousel'
import Table from 'react-bootstrap/Table'
import SearchBar from '../SearchBar/SearchBar'
import { hardHotelObject } from '../assets/HardCode'
import ControlledCarousel1 from '../thumbilCarousel/thumbilCarousel'

// on click we need content api call to pull the hotel information ( des+img)
// we should have made the price and availability call before in search results so click on book will take you to the hotel page
const HotelPage = () => {
  return (
    <>
      <h4>This hotel have spceial offer for you</h4>
      <p>{hardHotelObject.name}</p>
      <p>{hardHotelObject.label.posh}</p>
      <p>{hardHotelObject.address},
        {hardHotelObject.postalCode},
        {hardHotelObject.city} show on map
      </p>
      <p>{hardHotelObject.rooms[0].rates[0].net}</p>
      <button variant='primary'>Book</button>
      <ControlledCarousel />

      <div>amenities:
        <p>{hardHotelObject.Numberofrooms.number} Rooms</p>
        <ul style={{ listStyleType: 'none' }}>{hardHotelObject.hotelAmenities.map(item =>
          <li key={item.title}>{item.Icon}{item.title}</li>
        )}
        </ul>
        <img src='' alt='TA' />
      </div>
      <p>{hardHotelObject.categoryName}Hotel</p>
      <p>key facts:
        {HotelDetails.hotel.description.content}
      </p>
      <p>Check-in from{hardHotelObject.Checkin.timeFrom}
        Check-out from{hardHotelObject.Checkout.timeFrom}
      </p>
      <p>{hardHotelObject.CheckinRules.title} required at Check-in</p>
      <p>City tax will be collected by hotel at check-in or check-out.</p>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Adults</th>
            <th>Included</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{
              hardHotelObject.rooms[0].name
            }
            <ControlledCarousel1 />

            </td>
            <td>Adults {hardHotelObject.rooms[0].rates[0].adults}
              Children {hardHotelObject.rooms[0].rates[0].children}
            </td>
            <td>Free Wifi</td>
            <td>{hardHotelObject.rooms[0].rates[0].net}$<button>Book Now</button></td>
          </tr>

        </tbody>
        <tbody>
          <p>Your booknig from {} to {}</p>
          <p>{hardHotelObject.rooms[0].rates[0].net}</p>
          <button>Book Now</button>
          <button>Add to cart</button>
          {/* <Extras /> */}
        </tbody>
      </Table>
    </>

  )
}; export default HotelPage

import React from 'react'
import HotelDetails from '../HotelsDetails'
import ControlledCarousel from '../HotelPCarousel/HotelPCarousel'
import Table from 'react-bootstrap/Table'
import SearchBar from '../SearchBar/SearchBar'
import { hardHotelObject } from '../assets/HardCode'
import ControlledCarousel1 from '../thumbilCarousel/thumbilCarousel'
import StarRating from '../StarRating/StarRating'
import Button from 'react-bootstrap/Button'
import DateRangePicker from '../DateRange/NewDateRange'

// on click we need content api call to pull the hotel information ( des+img)
// we should have made the price and availability call before in search results so click on book will take you to the hotel page
const HotelPage = (props) => {
  const cancelationDate = hardHotelObject.rooms[0].rates[0].cancellationPolicies[0].from
  return (
    <>
      <h4>This hotel have spceial offer for you</h4>
      <p>{props.name}</p>
      <p>{hardHotelObject.label.posh}</p>
      <p>{props.address},
        {props.postalCode},
        {props.city} show on map
      </p>
      <p>{props.rooms[0].rates[0].net}</p>
      <p>Edit your dates</p>

      <DateRangePicker />
      <div>
        <ControlledCarousel />
      </div>
      <div>amenities:
        <p>{props.Numberofrooms.number} Rooms</p>
        <ul style={{ listStyleType: 'none' }}>{hardHotelObject.hotelAmenities.map(item =>
          <li key={item.title}>{item.Icon}{item.title}</li>
        )}
        </ul>
        <img src='' alt='TA' />
      </div>
      <StarRating />
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
              props.rooms[0].name
            }
              <ControlledCarousel1 />

            </td>
            <td>Adults {props.rooms[0].rates[0].adults}
              Children {props.rooms[0].rates[0].children}
            </td>
            <td>Free Wifi</td>
            <td>{props.rooms[0].rates[0].net}$<Button variant='primary'>Book now</Button>{' '}Free cancelation till{cancelationDate}</td>
          </tr>

        </tbody>
        <tbody>
          <p>Your booknig from {} to {}</p>
          <p>{props.rooms[0].rates[0].net}</p>
          <Button variant='primary'>Book now</Button>{' '}
          <Button variant='outline-primary'>Add to cart</Button>{' '}

        </tbody>
      </Table>
    </>

  )
}; export default HotelPage

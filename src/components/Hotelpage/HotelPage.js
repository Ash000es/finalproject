import React, { useState, useContext } from 'react'
import HotelDetails from '../HotelsDetails'
import ControlledCarousel from '../HotelPCarousel/HotelPCarousel'
import Table from 'react-bootstrap/Table'
import SearchBar from '../SearchBar/SearchBar'
import { hardHotelObject } from '../assets/HardCode'
import ControlledCarousel1 from '../thumbilCarousel/thumbilCarousel'
import StarRating from '../StarRating/StarRating'
import Button from 'react-bootstrap/Button'
import DateRangePicker from '../DateRange/NewDateRange'
import { GetImages } from '../SearchBar/HotelCarousel'
import { MyProvider, ProjectContext } from '../Provider/Provider'
import CartDrawer from '../CartDrawer/CartDrawer'

const HotelPage = (props) => {
  // const cancelationDate = props.hotel.rooms[0].rates[0].cancellationPolicies[0].from
  const { project, setProject } = useContext(ProjectContext)
  return (
    <>
      <h4>This hotel have spceial offer for you</h4>
      <p>{hardHotelObject.name}</p>
      <p>{hardHotelObject.label.posh}</p>
      <p>{hardHotelObject.address},
        {hardHotelObject.postalCode},
        {hardHotelObject.city} show on map
      </p>
      <p>nothing</p>
      <p>Edit your dates</p>

      <DateRangePicker />
      <div>
        <GetImages />
      </div>
      <div>amenities:bn
        <p>70 Rooms</p>
        <ul style={{ listStyleType: 'none' }}>{hardHotelObject.hotelAmenities.map(item =>
          <li key={item.title}>{item.Icon}{item.title}</li>
        )}
        </ul>
        <img src='' alt='TA' />
      </div>
      <StarRating />
      <p>key facts:
        nothing
      </p>
      <p>Check-in from
        Check-out from
      </p>
      <p>{hardHotelObject.CheckinRules.title} required at Check-in</p>
      <p>City tax will be collected by hotel at check-in or check-out.</p>
      {/* function to map rooms here to return many rooms in the table, also where extras will go here? */}
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
            <td>
              {/* <ControlledCarousel1 /> */}
              <img src='' alt='not' />

            </td>
            <td>Adults 2
              Children 1
            </td>
            <td>Free Wifi</td>
            <td>120 $<Button variant='primary'>Book now</Button>{' '}Free cancelation till</td>
          </tr>

        </tbody>
        <tbody>
          <p>Your booknig from {} to {}</p>
          <p>130</p>
          <Button variant='primary'>Book now</Button>{' '}
          <CartDrawer />

        </tbody>
      </Table>
    </>

  )
}; export default HotelPage

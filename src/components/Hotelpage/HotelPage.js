import React, { useState, useContext } from 'react'
import Table from 'react-bootstrap/Table'
import { hardHotelObject } from '../assets/HardCode'
import RoomCarousel from '../thumbilCarousel'
import StarRatingDisplay from '../StarRatingDisplay'
import Button from 'react-bootstrap/Button'
import DateRangePicker from '../DateRange/NewDateRange'
import { HotelCarousel } from '../HotelCarousel'
import { MyProvider, ProjectContext } from '../../Helper/Provider'
import CartDrawer from '../CartDrawer'
import { addCartItem, showCancelationPolicy } from '../../Helper/Helper'

const HotelPage = () => {
  const { project, setProject } = useContext(ProjectContext)
  // add to cart function to add the item to the cart drawer
  const test = project.results
  console.log(test, 'test')
  const currentSelection = test.currentHotel
  console.log(currentSelection, 'mfers')
  // const addToCart = () => {
  //   const hotelCartItem = { name: props.hotel.name, image: props.hotel.images[0], price: props.hotel.price, code: props.hotel.code }
  //   setProject({ ...project, cartItems: hotelCartItem })
  // }
  // onClick={addToCart}
  return (

    <>

      return (
      <>
        <h4>This hotel have spceial offer for you</h4>
        <div> <p>{currentSelection.name}{hardHotelObject.label.posh}{currentSelection.address},{hardHotelObject.postalCode},{currentSelection.city} show on map</p></div>

        <div>
          <p>Edit your dates</p>
          <DateRangePicker />
        </div>

        <HotelCarousel />

        <div>amenities:bn
          <p>70 Rooms</p>
          <ul style={{ listStyleType: 'none' }}>{currentSelection.amenities2.map(item =>
            <li key={item}>{item.icon}{item.title}</li>
          )}
          </ul>

        </div>
        <img src='' alt='TA' />
        <StarRatingDisplay />
        <p>key facts:nothing</p>
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

            {currentSelection.rooms.map((room, i) => {
              return (

                <tr key={room[i]} room={room[i]}>

                  <td>
                    {/* <RoomCarousel room={room[i]} /> */}
                    {/* passing the room object here is ok? */}
                    <p>{room.name[i]}</p>

                  </td>
                  <td>{room.rates.map((rate, i) => rate.adults)}</td>

                  <td>Function to display only room amentities based on group facilites code</td>
                  {/* <td><p>{room.rates.map(rate => rate.net)}</p><Button variant='primary'>Book now</Button>{' '}<p>{showCancelationPolicy(room)}</p></td> */}
                </tr>

              )
            })}

          </tbody>
          <tbody>
            <p>Your booknig from {} to {}</p>
            <p>130</p>
            <Button variant='primary'>Book now</Button>{' '}
            <Button variant='outline-primary'>Add to cart</Button>{' '}
            <CartDrawer />

          </tbody>
        </Table>
      </>
      )

    </>
  )
}; export default HotelPage

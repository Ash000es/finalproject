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
import { addCartItem, showCancelationPolicy, getAmenitiesArray } from '../../Helper/Helper'
import { amenities } from '../../Helper/amenities'
import SelectRoom from '../SelectRoom'

const HotelPage = () => {
  const { project, setProject } = useContext(ProjectContext)
  // add to cart function to add the item to the cart drawer

  const currentSelection = project.currentHotel
  const toMap = currentSelection.amenities2
  const readyAmenities = getAmenitiesArray(toMap, amenities)
  console.log(readyAmenities, 'I am ready')

  // const addToCart = () => {
  //   const hotelCartItem = { name: props.hotel.name, image: props.hotel.images[0], price: props.hotel.price, code: props.hotel.code }
  //   setProject({ ...project, cartItems: hotelCartItem })
  // }
  // onClick={addToCart}
  const size = { width: '200px' }

  return (

    <div className='fillit'>
      <div>
        <h4>This hotel have spceial offer for you</h4>

        <p>{currentSelection.name}{hardHotelObject.label.posh}{currentSelection.address.content},{currentSelection.destinationName} show on map</p>
      </div>
      <div>
        <p>Edit your dates</p>
        <DateRangePicker />
      </div>

      <HotelCarousel currentSelection={currentSelection} />

      <div>
        <p>Amenities:</p>
        <ul style={{ listStyleType: 'none' }}>{readyAmenities && readyAmenities.map(item =>
          <li key={item.name}>{item.icon}{item.name}</li>

        )}
        </ul>

      </div>
      <p>Key facts</p>
      <p>{currentSelection.description.content}</p>
      <img src='' alt='TA' />

      <StarRatingDisplay currentSelection={currentSelection} />

      {/* <p>{hardHotelObject.CheckinRules.title} required at Check-in</p>
      <p>City tax will be collected by hotel at check-in or check-out.</p> */}
      {/* function to map rooms here to return many rooms in the table, also where extras will go here? */}
      <div>
        <Table striped bordered hover size='lg'>
          <thead>
            <tr>
              <th>Room Type</th>
              <th>Included</th>
              <th>Number of rooms</th>
              <th>Price</th>

            </tr>
          </thead>

          <tbody>

            {currentSelection.rooms.map(room => {
              return (
                <tr key={room} room={room}>
                  <td>{room.name}</td>
                  {room.rates.map(rate => {
                    return (
                      <tr key={rate} rate={rate}>
                        <td style={size}>{rate.boardName}</td>
                        <td style={size}>{rate.allotment}</td>
                        <td style={size}>{rate.net}</td>
                      </tr>
                    )
                  })}

                </tr>
              )
            })}

          </tbody>
          {/* <RoomCarousel room={room[i]} currentSelection={currentSelection} />  */}
          {/* <td><p>{room.rates.map(rate => rate.net)}</p><Button variant='primary'>Book now</Button>{' '}<p>{showCancelationPolicy(room)}</p></td> */}

          {/* <p>Your booknig from {} to {}</p>
          <p>130</p>
          <Button variant='primary'>Book now</Button>{' '}
          <Button variant='outline-primary'>Add to cart</Button>{' '} */}
          {/* <CartDrawer /> */}

        </Table>
        <div><p><Button variant='primary'>Book now</Button>{' '}</p></div>

      </div>

    </div>
  )
}; export default HotelPage

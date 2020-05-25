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
import CollapsibleTable from '../ExpandableTable'

const HotelPage = () => {
  const { project, setProject } = useContext(ProjectContext)
  // add to cart function to add the item to the cart drawer

  const currentSelection = project.currentHotel
  const toMap = currentSelection.amenities2
  const readyAmenities = getAmenitiesArray(toMap, amenities)
  console.log(readyAmenities, 'I am ready')

  // const addToCart = () => {
  //   const hotelCartItem = { name: currentSelection.name, image: currentSelection.images[0], price: rate.net, code: currentSelection.code, board: rate.boardName }
  //   setProject({ ...project, cartItems: hotelCartItem })
  // }

  const size = { width: '200px' }
  const roomy = currentSelection.rooms.map(room => room)
  // const ratey = roomy.rates.map(rate => rate)

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
      <div><CollapsibleTable rooms={roomy} /></div>

    </div>
  )
}; export default HotelPage

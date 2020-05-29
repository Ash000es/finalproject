import React, { useState, useContext } from 'react'
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
import CollapsibleTable from '../ExpandableTable'
import { Redirect } from 'react-router'

const HotelPage = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [currentselectedinfo, setCurrentSelectedInfo] = useState()
  const [redirect, setRedirect] = useState(false)

  const currentSelection = project.currentHotel
  const toMap = currentSelection.amenities2
  const readyAmenities = getAmenitiesArray(toMap, amenities)

  const displaySelectedRoomInfo = (roomSelectionInfo) => {
    console.log(roomSelectionInfo, 'object here')
    setCurrentSelectedInfo([roomSelectionInfo])
  }
  const handleClickButton = () => {
    onCompelet()
    setProject({ ...project, cartItems: currentselectedinfo })
  }
  const onCompelet = () => {
    setRedirect(true)
  }

  const size = { width: '200px' }
  const roomy = currentSelection.rooms.map(room => room)
  if (redirect) {
    return <Redirect exact push to='/reviewcart' />
  }

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
          <li key={Math.random()}>{item.icon}{item.name}</li>

        )}
        </ul>

      </div>
      <p>Key facts</p>
      <p>{currentSelection.description.content}</p>
      <img src='' alt='TA' />

      <StarRatingDisplay currentSelection={currentSelection} />
      <div><CollapsibleTable rooms={roomy} onChange={displaySelectedRoomInfo} /></div>
      {currentselectedinfo && currentselectedinfo.map(room => {
        { /* TODO: const {rateKey, etc, etc.} = room */ }
        console.log(room, 'iam trouble')
        return (
          <div key={room.rateKey}>
            <p>Room Type:{room.roomType}</p>
            <p>Included:{room.boardName}</p>
            <p>Price per night: {room.net}</p>
            <p>Room count: {room.roomNumber}</p>
            <p>Total price: {room.totalSelectionPrice}</p>
            <Button onClick={(room) => handleClickButton(room)} variant='primary'>Book</Button>{' '}
            <CartDrawer currentCartItem={currentselectedinfo} />

          </div>

        )
      })}

    </div>
  )
}; export default HotelPage

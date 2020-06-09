import React, { useState, useContext, useMemo } from 'react'
import { hardHotelObject } from '../assets/HardCode'
import RoomCarousel from '../components/thumbilCarousel'
import StarRatingDisplay from '../components/StarRatingDisplay'
import Button from 'react-bootstrap/Button'
import DateRangePicker from '../components/DateRange/NewDateRange'
import { HotelCarousel } from '../components/HotelCarousel'
import { MyProvider, ProjectContext } from '../providers/Provider'
import CartDrawer from '../components/CartDrawer'
import { addCartItem, showCancelationPolicy, getAmenitiesArray } from '../Helper/Helper'
import { amenities } from '../Helper/amenities'
import CollapsibleTable from '../components/ExpandableTable'
import { Redirect } from 'react-router'

const HotelPage = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [currentselectedinfo, setCurrentSelectedInfo] = useState([])
  console.log(currentselectedinfo, 'currentselectedinfo')
  const [redirect, setRedirect] = useState(false)
  const currentSelection = project.currentHotel
  const toMap = currentSelection.facilities
  const readyAmenities = getAmenitiesArray(toMap, amenities)
  const size = { width: '200px' }
  const roomy = currentSelection.rooms.map(room => room)

  const displaySelectedRoomInfo = (roomSelectionInfo) => {
    // console.log(roomSelectionInfo, 'object here')
    setCurrentSelectedInfo(currentselectedinfo.concat(roomSelectionInfo))
  }
  const handleClickButton = () => {
    onCompelet()
    setProject({ ...project, cartItems: currentselectedinfo })
  }
  const onCompelet = () => {
    setRedirect(true)
  }
  const stopRerenderingHotelCarousel = useMemo(() => {
    // TODO: change HotelCarousel to SearchResultsCarousel and send in Images as props instead of context. Same with currentSelection
    return <HotelCarousel currentSelection={currentSelection} />
  }, [])

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
      {stopRerenderingHotelCarousel}

      <div>
        <p>Amenities:</p>
        <ul style={{ listStyleType: 'none' }}>{readyAmenities && readyAmenities.map(item =>
          <li key={item.facilityCode}>{item.icon}{item.name}</li>

        )}
        </ul>

      </div>
      <p>Key facts</p>
      {/* <p>{currentSelection.description.content.length > 200 ? /TODO google shorten text javascript}</p> */}
      <img src='' alt='TA' />

      <StarRatingDisplay currentSelection={currentSelection} />
      <div><CollapsibleTable rooms={roomy} onChange={displaySelectedRoomInfo} /></div>
      {currentselectedinfo && currentselectedinfo.map(room => {
        { /* TODO: const {rateKey, etc, etc.} = room / I don't understand why should I do that ? */ }
        { /* console.log(room, 'iam room') */ }
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

/*
Create a sepatate useState for each field that you want to update

- room type: useState([])
- room count: useState(0)
- etc
- price: calculatePrice()

...

// creates the list of results room types
const displayRoomTypes = () => {
  const result = ''
  roomTypes.forEach(room => {
    ressult = result + room + " + "
  })
  return result
}

....

onClickBook

*/

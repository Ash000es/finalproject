import React, { useState, useContext, useMemo } from 'react'
import { hardHotelObject } from '../assets/HardCode'
import RoomCarousel from '../components/thumbilCarousel'
import StarRatingDisplay from '../components/StarRatingDisplay'
import Button from 'react-bootstrap/Button'
import DateRangePicker from '../components/DateRange/NewDateRange'
import { HotelCarousel } from '../components/HotelCarousel'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { CartDrawer } from '../components/CartDrawerN'
import { addCartItem, showCancelationPolicy, getAmenitiesArray, sumUp, getUnique } from '../Helper/Helper'
import CollapsibleTable from '../components/ExpandableTable'
import { Redirect } from 'react-router'
import { hotelAmen } from '../Helper/SearchResultsAmen'

const HotelPage = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [totalSelectedRoomsInfo, setTotalSelectedRoomsInfo] = useState([])
  const [totalSelectedExtrasInfo, setTotalSelectedExtrasInfo] = useState([])
  // console.log(totalSelectedRoomsInfo, 'totalSelectedRoomsInfo')
  // console.log(totalSelectedExtrasInfo, 'totalSelectedextrassInfo')
  const [extrasnum, setExtrasNum] = useState([])
  const [extraspricearr, setExtrasPriceArr] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [roomsnum, setRoomsNum] = useState([])
  const [roomspricearr, setRoomsPriceArr] = useState([])
  const currentSelection = project.currentHotel
  const facilitiesArray = currentSelection.facilities
  const checkinDate = currentSelection.checkInDate
  const checkoutDate = currentSelection.checkInOut
  const hotelName = currentSelection.name
  const roomy = currentSelection.rooms.map(room => room)

  const cartItems = project.cartItems
  const readyAmenities = getAmenitiesArray(facilitiesArray, hotelAmen)
  const readyAmenities1 = getUnique(readyAmenities, 'name')

  console.log(readyAmenities, 'readyAmenities')
  console.log(readyAmenities1, 'readyAmenities1')

  const selectionWrapper = (showme) => {
    const roomSelectionInfo = showme.rateKey ? showme : null
    const ExtrasSelectionInfo = showme.summary ? showme : null

    roomSelectionInfo && displaySelectedRoomInfo(roomSelectionInfo)
    ExtrasSelectionInfo && displaySelectedExtrasInfo(ExtrasSelectionInfo)
  }
  const displaySelectedRoomInfo = (roomSelectionInfo) => {
    const num = Number(roomSelectionInfo.roomNumber)
    const price = roomSelectionInfo.totalSelectionPrice
    const newRoomSelectionInfo = { ...roomSelectionInfo, image: 'https://source.unsplash.com/random', checkinDate, checkoutDate, hotelName }
    setRoomsNum(roomsnum.concat(num))
    setRoomsPriceArr(roomspricearr.concat(price))
    setTotalSelectedRoomsInfo(totalSelectedRoomsInfo.concat(newRoomSelectionInfo))
  }
  const displaySelectedExtrasInfo = (ExtrasSelectionInfo) => {
    const num = ExtrasSelectionInfo.extraSelectionNum
    const ExtraPrice = num * ExtrasSelectionInfo.price
    setExtrasNum(extrasnum.concat(num))
    setExtrasPriceArr(extraspricearr.concat(ExtraPrice))
    setTotalSelectedExtrasInfo(totalSelectedExtrasInfo.concat(ExtrasSelectionInfo))
  }

  const handleClickButton = () => {
    onCompelet()
    setProject({ ...project, cartItems: cartItems.concat(totalSelectedExtrasInfo).concat(totalSelectedRoomsInfo) })
  }
  const onCompelet = () => {
    setRedirect(true)
  }
  const stopRerenderingHotelCarousel = useMemo(() => {
    // TODO: change HotelCarousel to SearchResultsCarousel and send in Images as props instead of context. Same with currentSelection
    return <HotelCarousel currentSelection={currentSelection} />
  }, [1])

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
        <ul style={{ listStyleType: 'none' }}>{readyAmenities1 && readyAmenities1.map(item =>
          <li key={item.facilityCode}>{item.icon}{item.name}</li>

        )}
        </ul>

      </div>
      <p>Key facts</p>
      {/* <p>{currentSelection.description.content.length > 200 ? /TODO google shorten text javascript}</p> */}
      <img src='' alt='TA' />

      <StarRatingDisplay currentSelection={currentSelection} />
      <div><CollapsibleTable rooms={roomy} onChange={selectionWrapper} /></div>

      {totalSelectedRoomsInfo.length > 0 &&
        <div>

          <p>Rooms count: {roomsnum.reduce(sumUp)}</p>
          <p>Total price: {roomspricearr.reduce(sumUp)}</p>
          <Button onClick={(room) => handleClickButton(room)} variant='primary'>continue</Button>{' '}

        </div>}
      {totalSelectedExtrasInfo && totalSelectedExtrasInfo.map((extra, i) => {
        return (
          <div key={i} extra={extra}>
            <p>{extra.title}</p>
            <p>{extra.price}</p>

          </div>
        )
      })}

    </div>
  )
}; export default HotelPage

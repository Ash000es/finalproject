import React, { useState, useContext, useMemo } from 'react'
import { hardHotelObject } from '../assets/HardCode'
import RoomCarousel from '../components/thumbilCarousel'
import StarRatingDisplay from '../components/StarRatingDisplay'
import Button from 'react-bootstrap/Button'
import DateRangePicker from '../components/DateRange/NewDateRange'
import { SearchResultsCarousel } from '../components/SearchResultsCarousel'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { CartDrawer } from '../components/CartDrawerN'
import { addCartItem, getLargePictures, getAmenitiesArray, sumUp, getUnique, truncateString } from '../Helper/Helper'
import CollapsibleTable from '../components/ExpandableTable'
import { Redirect } from 'react-router'
import { hotelAmen } from '../Helper/SearchResultsAmen'
import { masterLinkLarge } from '../Helper/Constants'

const HotelPage = React.memo((props) => {
  const { project, setProject } = useContext(ProjectContext)
  const [totalSelectedRoomsInfo, setTotalSelectedRoomsInfo] = useState([])
  const [totalSelectedExtrasInfo, setTotalSelectedExtrasInfo] = useState([])
  const [extrasnum, setExtrasNum] = useState([])
  const [extraspricearr, setExtrasPriceArr] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [roomsnum, setRoomsNum] = useState([])
  const [roomspricearr, setRoomsPriceArr] = useState([])
  const currentSelection = props.location.state.currentHotel
  if (!currentSelection) {
    return <Redirect exact push to='/searchresults' />
  }

  // if (!Object.keys(currentSelection).length) return null
  const facilitiesArray = currentSelection.facilities
  const checkinDate = currentSelection.checkInDate
  const checkoutDate = currentSelection.checkInOut
  const hotelName = currentSelection.name
  const roomy = currentSelection.apiRooms
  const imagesArray = getLargePictures(currentSelection.images, masterLinkLarge)
  const keyFacts = currentSelection.description.content
  const cartItems = project.cartItems
  const readyAmenities = getAmenitiesArray(facilitiesArray, hotelAmen)
  const readyAmenities1 = getUnique(readyAmenities, 'name')

  // wrapper to summarise the room and extra selection
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

  if (redirect) {
    return <Redirect exact push to='/reviewcart' />
  }

  return (

    <div className='fillit' style={{ height: '80%', width: '80%' }}>

      <h4>This hotel have spceial offer for you</h4>

      <p>{currentSelection.name.content}{hardHotelObject.label.posh}{currentSelection.address.content},{currentSelection.destinationName} show on map</p>

      <div>
        <p>Edit your dates</p>
        <DateRangePicker />
      </div>
      <SearchResultsCarousel currentSelection={imagesArray} />

      <div>
        <p>Amenities:</p>
        <ul style={{ listStyleType: 'none', display: 'flex', alignContent: 'space-between', flexWrap: 'wrap' }}>{readyAmenities1 && readyAmenities1.map((item, i) =>
          <li key={i} item={item}>{item.icon}{item.name}</li>

        )}
        </ul>

      </div>
      <p>Key facts</p>
      <p>{truncateString(keyFacts, 4000)} </p>
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
}); export default HotelPage

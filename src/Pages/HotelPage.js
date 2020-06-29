import React, { useState, useContext, useMemo } from 'react'
import { hardHotelObject } from '../assets/HardCode'
import RoomCarousel from '../components/thumbilCarousel'
import StarRatingDisplay from '../components/StarRatingDisplay'
import Button from 'react-bootstrap/Button'
import DateRangePicker from '../components/DateRange/NewDateRange'
import { HotelCarousel } from '../components/HotelCarousel'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { CartDrawer } from '../components/CartDrawerN'
import { addCartItem, showCancelationPolicy, getAmenitiesArray, sumUp } from '../Helper/Helper'
import { amenities } from '../Helper/amenities'
import CollapsibleTable from '../components/ExpandableTable'
import { Redirect } from 'react-router'

const HotelPage = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [totalSelectedRoomsInfo, setTotalSelectedRoomsInfo] = useState([])
  const [totalSelectedExtrasInfo, setTotalSelectedExtrasInfo] = useState([])
  console.log(totalSelectedRoomsInfo, 'totalSelectedRoomsInfo')
  console.log(totalSelectedExtrasInfo, 'totalSelectedextrassInfo')
  const [extrassnum, setExtrasNum] = useState([])
  const [extrasspricearr, setExtrasPriceArr] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [roomsnum, setRoomsNum] = useState([])
  const [roomspricearr, setRoomsPriceArr] = useState([])
  const currentSelection = project.currentHotel
  const toMap = currentSelection.facilities
  const readyAmenities = getAmenitiesArray(toMap, amenities)
  const size = { width: '200px' }
  const roomy = currentSelection.rooms.map(room => room)
  console.log(project)

  const selectionWrapper = (showme) => {
    const roomSelectionInfo = showme.rateKey ? showme : null
    const ExtrasSelectionInfo = showme.summary ? showme : null

    roomSelectionInfo && displaySelectedRoomInfo(roomSelectionInfo)
    ExtrasSelectionInfo && displaySelectedExtrasInfo(ExtrasSelectionInfo)
  }
  const displaySelectedRoomInfo = (roomSelectionInfo) => {
    const num = parseFloat(roomSelectionInfo.roomNumber)
    const price = roomSelectionInfo.mySellingRate ? parseFloat(roomSelectionInfo.mySellingRate) : parseFloat(roomSelectionInfo.totalSelectionPrice)
    setRoomsNum(roomsnum.concat(num))
    setRoomsPriceArr(roomspricearr.concat(price))
    setTotalSelectedRoomsInfo(totalSelectedRoomsInfo.concat(roomSelectionInfo))
  }
  const displaySelectedExtrasInfo = (ExtrasSelectionInfo) => {
    console.log(ExtrasSelectionInfo, 'iam extra in hotelpage')
    const num = ExtrasSelectionInfo.extraSelectionNum
    const ExtraPrice = num * ExtrasSelectionInfo.price
    setExtrasNum(extrassnum.concat(num))
    setExtrasPriceArr(extrasspricearr.concat(ExtraPrice))
    setTotalSelectedExtrasInfo(totalSelectedExtrasInfo.concat(ExtrasSelectionInfo))
  }

  const handleClickButton = () => {
    onCompelet()
    setProject({ ...project, cartItems: totalSelectedRoomsInfo.concat(totalSelectedExtrasInfo) })
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
        <ul style={{ listStyleType: 'none' }}>{readyAmenities && readyAmenities.map(item =>
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
          <Button onClick={(room) => handleClickButton(room)} variant='primary'>Book</Button>{' '}

        </div>}
      {totalSelectedExtrasInfo && totalSelectedExtrasInfo.map((extra, i) => {
        return (
          <div key={i} extra={extra}>
            <p>{extra.title}</p>
            <p>{extra.price}</p>

            <CartDrawer totalSelectedExtrasInfo={totalSelectedExtrasInfo} totalSelectedRoomsInfo={totalSelectedRoomsInfo} />
          </div>
        )
      })}

    </div>
  )
}; export default HotelPage

/*

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

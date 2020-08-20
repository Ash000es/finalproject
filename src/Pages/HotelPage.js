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
import './HotelPage.css'
import CustomizedRatings from '../components/TripAdvisorRating'

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

    <div>
      <div className='hotelPage-text'>
        <h4>This hotel have spceial offer for you</h4>
        <p>Save up to <p style={{ color: 'red' }}>50% </p>by adding extra to your accomodation</p>
      </div>

      <div className='dateEdit'>

        <div className='dateEditPart1'>
          <p>Edit your dates</p>
        </div>
        <div className='dateEditPart2'>
          <DateRangePicker />
        </div>

      </div>
      <div className='hotelpage-outerdiv'>
        <div className='Headline_TA-Wrapper'>
          <div className='hotelAdress'>
            <div className='hotel-Name-Label-div'><div className='spaceMe'><p>{currentSelection.name.content}</p></div><div>{hardHotelObject.label.posh}</div></div>
            <div className='address-div'><div><p className='spaceMe'>{currentSelection.address.content}</p></div><div><p>{currentSelection.destinationName} <a href='' target=''>Show on map</a></p></div></div>

          </div>
          <div className='TA-Div'><CustomizedRatings TAReviews={currentSelection.reviews[0]} /></div>
        </div>

        <SearchResultsCarousel currentSelection={imagesArray} />
        <div className='information-section'>
          <div>
            <p>Amenities:</p>
            <ul style={{ listStyleType: 'none', display: 'flex', alignContent: 'space-between', flexWrap: 'wrap' }}>{readyAmenities1 && readyAmenities1.map((item, i) =>
              <li key={i} item={item}>{item.icon}{item.name}</li>

            )}
            </ul>

          </div>
          <div>
            <p>Key facts</p>
            <p>{truncateString(keyFacts, 4000)} </p>
          </div>
          <div className='starRating-Reviews'>

            <StarRatingDisplay currentSelection={currentSelection} />

          </div>
        </div>
        {/* table and float selction  */}
        <div className='table-float'>
          <div className='tableAlone'><CollapsibleTable rooms={roomy} onChange={selectionWrapper} /></div>
          <div className='floatedInfo'>
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
        </div>
      </div>

    </div>

  )
}); export default HotelPage

import React, { useState, useContext } from 'react'
import { SearchResultsCarousel } from '../components/SearchResultsCarousel'
import { ProjectContext } from '../providers/Provider'
import { getLargePictures, getAmenitiesArray, sumUp, getUnique, truncateString, labelReturn, roomPictureMatch, constfirstRoomImage } from '../Helper/Helper'
import CollapsibleTable from '../components/ExpandableTable'
import { Redirect } from 'react-router'
import { hotelAmen } from '../Helper/SearchResultsAmen'
import { masterLinkLarge, masterLinkSmall } from '../Helper/Constants'
import './HotelPage.css'
import CustomizedRatings from '../components/TripAdvisorRating'
import StarRatings from '../components/StarRatings'
import Button from '@material-ui/core/Button'
import MapPopUp from '../components/MapPopUp'

const HotelPage = React.memo((props) => {
  const { project, setProject } = useContext(ProjectContext)
  const [totalSelectedRoomsInfo, setTotalSelectedRoomsInfo] = useState([])
  const [totalSelectedExtrasInfo, setTotalSelectedExtrasInfo] = useState([])
  const [extrasnum, setExtrasNum] = useState([])
  const [extraspricearr, setExtrasPriceArr] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [roomsnum, setRoomsNum] = useState([])
  const [roomspricearr, setRoomsPriceArr] = useState([])
  const [currentSelection, setCurrentSelection] = useState(props.location.state.currentHotel)

  if (!currentSelection) {
    return <Redirect exact push to='/searchresults' />
  }

  const facilitiesArray = currentSelection.facilities
  const checkinDate = currentSelection.checkInDate
  const checkoutDate = currentSelection.checkInOut
  const hotelName = currentSelection.name.content || currentSelection.name
  const roomy1 = currentSelection.apiRooms
  const images = currentSelection.images
  const roomy = roomPictureMatch(roomy1, images, masterLinkSmall)
  const imagesArray = getLargePictures(currentSelection.images, masterLinkLarge)
  const firstImage = constfirstRoomImage(images)
  const imageObjectPath = firstImage.path
  const newPath = `${masterLinkSmall}${imageObjectPath}`
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
    const newRoomSelectionInfo = { ...roomSelectionInfo, image: newPath, checkinDate, checkoutDate, hotelName }
    setRoomsNum(roomsnum.concat(num))
    setRoomsPriceArr(roomspricearr.concat(price))
    setTotalSelectedRoomsInfo(totalSelectedRoomsInfo.concat(newRoomSelectionInfo))
  }
  const displaySelectedExtrasInfo = (ExtrasSelectionInfo) => {
    const num = ExtrasSelectionInfo.extraSelectionNum
    const ExtraPrice = num * ExtrasSelectionInfo.price
    const newExtrasSelectionInfo = { ...ExtrasSelectionInfo, num, ExtraPrice }

    setExtrasNum(extrasnum.concat(num))
    setExtrasPriceArr(extraspricearr.concat(ExtraPrice))
    setTotalSelectedExtrasInfo(totalSelectedExtrasInfo.concat(newExtrasSelectionInfo))
  }

  const handleClickButton = () => {
    onCompelet()
    setProject({ ...project, cartItems: cartItems.concat(totalSelectedRoomsInfo).concat(totalSelectedExtrasInfo) })
  }
  const onCompelet = () => {
    setRedirect(true)
  }

  const handleClickExtra = (e, value) => {
    // e.persist()
    const filteredCartItems = totalSelectedExtrasInfo.filter(extraitems => value !== extraitems)
    setTotalSelectedExtrasInfo(filteredCartItems)
  }

  if (redirect) {
    return <Redirect exact push to='/reviewcart' />
  }

  return (

    <div>

      <>
        <div className='hotelPage-text'>
          <h4>This hotel have spceial offer for you</h4>
          <p>Save up to <p style={{ color: 'red' }}>30% </p>by adding extra to your accomodation</p>
        </div>

        <div className='hotelpage-outerdiv'>
          <div className='Headline_TA-Wrapper'>
            <div className='hotelAdress'>
              <div className='hotel-Name-Label-div'><div className='spaceMe'><p>{currentSelection.name.content || currentSelection.name}</p></div><div>{labelReturn(currentSelection.categoryCode)}</div></div>
              <div className='address-div'><div><p className='spaceMe'>{currentSelection.address.content}</p></div><div><p>{currentSelection.destinationName} </p></div><MapPopUp lat={currentSelection.latitude} long={currentSelection.longitude} mapHotelsResults={currentSelection} /></div>

            </div>
            <div className='TA-Div'><CustomizedRatings TAReviews={currentSelection ? currentSelection.reviews[0] : null} /></div>
          </div>

          <SearchResultsCarousel currentSelection={imagesArray} />
          <div className='information-section'>
            <div>
              <p className='subheadingText'>Amenities:</p>
              <ul style={{ listStyleType: 'none', display: 'flex', alignContent: 'space-between', flexWrap: 'wrap' }}>{readyAmenities1 && readyAmenities1.map((item, i) =>
                <li key={i} item={item} style={{ marginRight: 15 }}>{item.icon}{item.name}</li>

              )}
              </ul>

            </div>
            <div>
              <p className='subheadingText'>Key facts:</p>
              <p>{truncateString(keyFacts, 4000)} </p>
            </div>
            <div className='starRating-Reviews'>

              <StarRatings currentSelection={currentSelection} />

            </div>
          </div>
          {/* table and float selction  */}
          <div className='table-float'>
            <div className='tableAlone'><CollapsibleTable rooms={roomy} onChange={selectionWrapper} /></div>
            <div className='floatedInfo'>
              <div className='emptyDiv-Background' />
              {totalSelectedRoomsInfo.length > 0 &&
                <div className='roomsSummary'>

                  <p>Rooms count: {roomsnum.reduce(sumUp)}</p>
                  <strong><p>Total price: {roomspricearr.reduce(sumUp)}$</p></strong>
                  <Button onClick={(room) => handleClickButton(room)} size='medium' style={{ backgroundColor: '#FF8B00', color: 'white' }}>continue</Button>

                </div>}
              {totalSelectedExtrasInfo && totalSelectedExtrasInfo.map((extra, i) => {
                return (
                  <div key={i} extra={extra} className='extrasSummary'>

                    <strong><p>Extras item:</p></strong>
                    <p>{extra.num || 1}{extra.title}</p>
                    <p>{extra.ExtraPrice || extra.price}$</p>
                    <Button color='secondary' size='medium' onClick={(e) => handleClickExtra(e, extra)}>Remove</Button>

                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </>

    </div>

  )
}); export default HotelPage

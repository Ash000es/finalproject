import React, { useContext, useState } from 'react'
import Sign from 'js-sha256'
import InputGroup from 'react-bootstrap/InputGroup'
import SearchField from '../SearchField/SearchField'
import OccSelector from '../OccSelector/OccSelector'
import OccSelector2 from '../OccSelector2/OccSelector2'
import FirebaseContext from '../Firebase'
import DateRange from '../DateRange/DateRange'
import Button from 'react-bootstrap/Button'
import PriceSlider from '../PriceSlider'
import AmenitiesSelect from '../AmenitiesSelect'
import StarRatingFilter from '../StarRatingFilter'
import DateRangePicker from '../DateRange/NewDateRange'
import './SearchBar.css'
import { Link } from 'react-router-dom'
import HotelPage from '../Hotelpage/HotelPage'
import { mergeArrayObjects, getHotelsCodes } from '../Helper'
import { MyProvider, ProjectContext } from '../Provider'
import { Redirect } from 'react-router'

import { db, project, setProject } from '../assets/Constants'

const SearchBar = () => {
  const intialState = {

    results: {},
    stay: {
      checkIn: '2020-11-15',
      checkOut: '2020-11-16'
    },
    occupancies: [
      {
        rooms: 1,
        adults: 1,
        children: 0
        // paxes: [{
        // type: '',
        // age: 0
        // }]
      }
    ],
    destination: {
      code: 'IBZ'

    },
    hotels: [],
    redirect: false,
    reviews: [{
      type: 'TRIPADVISOR',
      minRate: 3,
      minReviewCount: 3
    }]
  }

  const [state, setState] = useState(intialState)
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)

  console.log(project, 'first project')

  // TODO: This logic is way too much to be connected to a searchbar. Seperate fetchHotels from searchBar by moving it to another component. Watch my video about "Refactoring"

  const fetchHotels = (Destination) => {
    console.log('searchME')
    const hotels = []
    // map the results and get an array of hotel IDS getHotelsCodes()
    const arrayCodes = [663, 1431, 1446, 6940, 576022, 585184]
    db.collection('hotels-limited').where('destinationCode', '==', Destination).where('categoryCode', '==', '4EST')

      .onSnapshot(querySnapshot => {
        querySnapshot.forEach((hotel) => {
          const hotelData = hotel.data()
          // if hotelData.code
          if (arrayCodes.includes(hotelData.code)) {
            // TODO: THIS IS THE MOST IMPORTANT PART
            // don't push hotel.data(), instead create a function called mapResultToHotel and pass it the hotel.data()
            // inside the function you loop through the data and for every hotel you create a new object that fits your needs for this app.
            // Rename anything you want to fit your needs. Add a field for amenities and fetch it from your constants array, same for icon.
            // In the end you should be left with an array of hotel objects that are ready to be used.
            hotels.push(hotel.data())
            console.log(hotels, 'pus')
          }
        })
      })
      // take away setproject from here and return hotels array?
    return hotels
  }

  // const savetoLocalStorage = () => {
  //   //  window.localStorage.setItem('Objectmapping', JSON.stringfy(hotels))
  // }

  // const getfromLocalStorage = () => {
  //   const res = window.localStorage.getItem('Objectmapping')
  //   JSON.parse(res)
  // }

  const handleClickButton = () => {
    const apikey = '2t97t6954dckh4ynkwknr78j'
    const sec = 'nDD9BFXf5a'
    const D = new Date()
    const databaseDestination = state.destination.code
    const hotelsdb = fetchHotels('IBZ')
    // doesn't see to be working though

    const getSignature = () => {
      return Sign(apikey + sec + Math.round(D.getTime() / 1000))
    }

    const createRequestBody = () => {
      const { occupancies, destination, stay, reviews } = state
      return {
        stay,
        occupancies,
        destination,
        reviews
      }
    }

    console.log(getSignature())
    console.log(JSON.stringify(createRequestBody()))
    window.fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
      {
        method: 'POST',
        headers: {
          'Api-Key': apikey,
          'X-Signature': getSignature(),
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip'
        },

        body: JSON.stringify(createRequestBody())
      }).then(res => res.json()).then(Response => {
      console.log(Response)
      const { hotels } = Response
      console.log(hotels, 'i am results NEW')
      const results = hotels.hotels
      console.log(results, 'fuck this')
      setState({ redirect: true })
      // is that what you meant? set project 2x1?
      setProject({
        ...project,
        results: results,
        hotels: hotelsdb

      })
    })
  }

  // const results = mergeArrayObjects(handleClickButton, fetchHotels)
  // console.log(results, '3')
  // setProject({ ...project, results: results })

  const handleOccChange = (occ) => {
    const { rooms, adults, children } = occ
    setState({ occupancies: [{ rooms, adults, children }] })
  }

  const handleOccChange2 = (occ2) => {
    const { rooms, adults, children } = occ2
    setState({ occupancies: [{ rooms, adults, children }] })
  }

  const handleLocationChange = (code) => {
    const { destination } = state
    setState({ destination: { ...destination, code } })
  }

  const handleDateChange1 = (NewDate1) => {
    console.log(NewDate1)
    const checkIn = NewDate1[0]
    const checkOut = NewDate1[1]
    const { stay } = state

    console.log(checkIn)
    setState({ stay: { ...stay, checkIn, checkOut } })
    // console.log(stay)
  }
  // const handleSearch = () => {
  //   const arr1 = handleClickButton()
  //   console.log(arr1, '1')
  //   const arr2 = fetchHotels('IBZ')
  //   console.log(arr2, '2')
  // }

  if (state.redirect) {
    return <Redirect exact push to='/searchresults' />
  }
  // console.log(project)
  return (
    <>
      <div className='SearchBar'>

        <SearchField onChange={handleLocationChange} />
        {/* <DateRange onChange={handleDateChange1} /> */}
        <DateRangePicker onChange={handleDateChange1} />
        <OccSelector onChange={handleOccChange} />
        <OccSelector2 onChange={handleOccChange2} />
        {/* <Link to='/searchresults'> */}
        <Button variant='primary' onClick={handleClickButton}>Search</Button>{' '}
        {/* </Link> */}

      </div>
      <div className='SearchBarFilters'>
        <PriceSlider />
        <AmenitiesSelect />
        <StarRatingFilter />

      </div>

    </>
  )
}

export default SearchBar

import React, { useContext, useState } from 'react'
import Sign from 'js-sha256'
import InputGroup from 'react-bootstrap/InputGroup'
import SearchField from '../SearchField/SearchField'
import OccSelector from '../OccSelector/OccSelector'
import OccSelector2 from '../OccSelector2/OccSelector2'
import FirebaseContext from '../Firebase/Firebase'
import DateRange from '../DateRange/DateRange'
import Button from 'react-bootstrap/Button'
import CustomizedSlider from '../Sliders/PriceSlider'
import MultipleSelect from '../MultiCheckBox/MultiCheckBox'
import MultipleSelectStars from '../StarRatingFilter/StarRatingFilter'
import DateRangePicker from '../DateRange/NewDateRange'
import './SearchBar.css'
import { Link } from 'react-router-dom'
import HotelPage from '../Hotelpage/HotelPage'
import ControlledCarousel from '../HotelPCarousel/HotelPCarousel'
import { Test } from './Test'
import { MyProvider, ProjectContext } from '../Provider/Provider'
import { Redirect } from 'react-router'

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

  const fetchHotels = (destination) => {
    console.log('searchME')

    // map the results and get an array of hotel IDS
    const array = [576022, 585184, 1447, 361785, 1431, 1446, 6940, 24845]
    db.collection('hotels-limited').where('destinationCode', '==', destination).where('categoryCode', '==', '4EST')

      .onSnapshot(querySnapshot => {
        const hotels = []
        querySnapshot.forEach((hotel) => {
          const hotelData = hotel.data()
          // if hotelData.code
          if (array.includes(hotelData.code)) {
            hotels.push(hotel.data())
          }
        })
        setProject({ ...project, hotels })

        console.log(hotels)
      })

    const facilitiesRef = db.collection('facilities')
    const query = facilitiesRef.where('code', '==', 10).where('facilityGroupCode', '==', 20)
    query.get().then(snapshot => {
      snapshot.forEach(item => {
        console.log(item.id, item.data())
      })
    }).catch(err => console.log(err))
  }

  const savetoLocalStorage = () => {
    //  window.localStorage.setItem('Objectmapping', JSON.stringfy(hotels))
  }

  const getfromLocalStorage = () => {
    const res = window.localStorage.getItem('Objectmapping')
    JSON.parse(res)
  }

  // destinationsRef.get().then(doc => console.log(doc.data()))
  // all your hotels are in a DB called hotels-limited
  // all your facilites groups are in a 'facilites'
  // facilityGroupCode 'facilityGroupCode'

  const handleSearch = () => {
    console.log('search')
    fetchHotels('IBZ')
  }

  const handleClickButton = () => {
    const apikey = 'kw7vpx3nefnq47b8dk6kehg4'
    const sec = 'nyM8qx6n8S'
    const D = new Date()
    const databaseDestination = state.destination.code
    fetchHotels(databaseDestination)

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
          'Content-Type': 'application/json'
          // 'Accept-Encoding': 'gzip'
        },

        body: JSON.stringify(createRequestBody())
      }).then(res => res.json()).then(Response => {
      console.log(Response)
      const { hotels } = Response

      console.log(hotels)

      setState({ results: hotels })
      setState({ redirect: true })
    })
  }

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

  if (state.redirect) {
    return <Redirect exact push to='/searchresults' />
  }
  console.log(project)
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
        <Button variant='success'>Inspire me</Button>{' '}
      </div>
      <div className='SearchBarFilters'>
        <CustomizedSlider />
        <MultipleSelect />
        <MultipleSelectStars />
        {/* <Test hotels={state.hotels} /> */}
      </div>

    </>
  )
}

export default SearchBar

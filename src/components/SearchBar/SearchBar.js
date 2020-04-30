import React from 'react'
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
import { hotelBeds } from '../Hotelbeds/Hotelbeds'
import HotelList from '../HotelList/HoteList'
import { Link } from 'react-router-dom'
import HotelPage from '../Hotelpage/HotelPage'
import ControlledCarousel from '../HotelPCarousel/HotelPCarousel'
import { Test } from './Test'
import { Redirect } from 'react-router'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      results: {},
      stay: {
        checkIn: '2020-11-15',
        checkOut: '2020-11-16'
      },
      occupancies: [
        {
          rooms: 1,
          adults: 1,
          children: 0,
          paxes: [{
            type: '',
            age: 0
          }]
        }
      ],
      destination: {
        code: 'IBZ'

      },
      hotels: [],
      redirect: false
    }

    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleOccChange = this.handleOccChange.bind(this)
    this.handleOccChange2 = this.handleOccChange2.bind(this)
    this.handleDateChange1 = this.handleDateChange1.bind(this)
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  fetchHotels=(destination) => {
    console.log('searchME')
    const db = this.context
    const array = [576022, 585184, 1447, 361785, 1431, 663, 1446, 6940, 24845]
    db.collection('hotels-limited').where('destinationCode', '==', destination).where('categoryCode', '==', '4EST').where('code', 'in', array)
      .onSnapshot(querySnapshot => {
        const hotels = []
        querySnapshot.forEach((hotel) => hotels.push(hotel.data()))
        this.setState({ hotels: hotels })
        console.log(hotels)
      })
  }

  componentDidMount () {
    // console.log('yayyo')
    const db = this.context

    // destinationsRef.get().then(doc => console.log(doc.data()))
    // all your hotels are in a DB called hotels-limited
    // all your facilites groups are in a 'facilites'
    // facilityGroupCode 'facilityGroupCode'
  }

  handleSearch=() => {
    console.log('search')
    this.fetchHotels('IBZ')
  }

    handleClickButton= () => {
      const apikey = 'e2mfrt8fwnfchk95gyr7vfbj'
      const sec = 'mVvBjwddFw'
      const D = new Date()
      const databaseDestination = this.state.destination.code
      this.fetchHotels(databaseDestination)

      const getSignature = () => {
        return Sign(apikey + sec + Math.round(D.getTime() / 1000))
      }

      const createRequestBody = () => {
        const { occupancies, destination, stay } = this.state
        return {
          stay,
          occupancies,
          destination
        }
      }

      console.log(getSignature())
      console.log(JSON.stringify(createRequestBody()))
      window.fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
        {
          method: 'POST',
          headers: {
            'Api-key': apikey,
            'X-Signature': getSignature(),
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip'
          },

          body: JSON.stringify(createRequestBody())
        }).then(res => res.json()).then(Response => {
        console.log(Response)
        const { hotels } = Response

        console.log(hotels)

        this.setState({ results: hotels })
        this.setState({ redirect: true })
      })
    }

    handleOccChange (occ) {
      const { rooms, adults, children } = occ
      this.setState({ occupancies: [{ rooms, adults, children }] })
    }

    handleOccChange2 (occ2) {
      const { rooms, adults, children } = occ2
      this.setState({ occupancies: [{ rooms, adults, children }] })
    }

    handleLocationChange (code) {
      const { destination } = this.state
      this.setState({ destination: { ...destination, code } })
    }

    handleDateChange1 (NewDate1) {
      console.log(NewDate1)
      const checkIn = NewDate1[0]
      const checkOut = NewDate1[1]
      const { stay } = this.state

      console.log(checkIn)
      this.setState({ stay: { ...stay, checkIn, checkOut } })
      // console.log(stay)
    }

    render () {
      if (this.state.redirect) {
        return <Redirect exact push to='/searchresults' />
      }
      return (
        <>
          <div className='SearchBar'>

            <SearchField onChange={this.handleLocationChange} />
            {/* <DateRange onChange={this.handleDateChange1} /> */}
            <DateRangePicker onChange={this.handleDateChange1} />
            <OccSelector onChange={this.handleOccChange} />
            <OccSelector2 onChange={this.handleOccChange2} />
            {/* <Link to='/searchresults'> */}
            <Button variant='primary' onClick={this.handleClickButton}>Search</Button>{' '}
            {/* </Link> */}
            <Button variant='success'>Inspire me</Button>{' '}
          </div>
          <div className='SearchBarFilters'>
            <CustomizedSlider />
            <MultipleSelect />
            <MultipleSelectStars />
            {/* <Test hotels={this.state.hotels} /> */}
          </div>

        </>
      )
    }
}

export default SearchBar
SearchBar.contextType = FirebaseContext

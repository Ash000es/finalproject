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

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      results: [],
      stay: {
        checkIn: '2020-06-15',
        checkOut: '2020-06-16'
      },
      occupancies: [
        {
          rooms: 1,
          adults: 1,
          children: 0,
          paxes: [{
            type: 'CH',
            age: 2
          }]
        }
      ],
      destination: {
        code: 'IBZ'

      }
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
    const arr212 = [182669, 78290, 256, 4975, 3411]
    const hotelsRef = db.collection('hotels-limited')
    const query = hotelsRef.where('destinationCode', '==', destination).where('categoryCode', '==', '3EST').where('code', 'in', arr212)
    query.get().then(snapShot => {
      if (snapShot.length == 0) console.log('no results ')
      snapShot.forEach(hotel => console.log(hotel.data()))
    }
    ).catch(error => console.log(error))
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
      const apikey = '2t97t6954dckh4ynkwknr78j'
      const sec = 'nDD9BFXf5a'
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

        this.setState({ results: [hotels] })
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
      return (
        <>
          <div className='SearchBar'>

            <SearchField onChange={this.handleLocationChange} />
            {/* <DateRange onChange={this.handleDateChange1} /> */}
            <DateRangePicker onChange={this.handleDateChange1} />
            <OccSelector onChange={this.handleOccChange} />
            <OccSelector2 onChange={this.handleOccChange2} />
            <Button variant='primary' onClick={this.handleClickButton}>Search</Button>{' '}
            <Button variant='success'>Inspire me</Button>{' '}
          </div>
          <div className='SearchBarFilters'>
            <CustomizedSlider />
            <MultipleSelect />
            <MultipleSelectStars />

          </div>
          <HotelList hotels={this.state.results} />
        </>
      )
    }
}

export default SearchBar
SearchBar.contextType = FirebaseContext

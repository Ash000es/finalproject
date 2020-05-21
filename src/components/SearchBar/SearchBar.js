import React, { useContext, useState } from 'react'
import SearchField from '../SearchField/SearchField'
import OccSelector from '../OccSelector/OccSelector'
import FirebaseContext from '../Firebase'
import Button from 'react-bootstrap/Button'
import PriceSlider from '../PriceSlider'
import AmenitiesSelect from '../AmenitiesSelect'
import StarRatingFilter from '../StarRatingFilter'
import NewDateRange from '../DateRange/NewDateRange'
import './SearchBar.css'
import { MyProvider, ProjectContext } from '../../Helper/Provider'
import { requestAvailableHotels } from '../../Helper/ApiHandler'

const SearchBar = (props) => {
  const intialState = {
    results: {},
    hotels: [],
    redirect: false,
    fullBar: false
  }

  const [state, setState] = useState(intialState)
  const [destination, setDestination] = useState({
    code: 'IBZ'
  }
  )
  console.log(destination, 'desty')
  const [reviews, setReviews] = useState(
    [{
      type: 'TRIPADVISOR',
      minRate: 3,
      minReviewCount: 3
    }]
  )
  const [stay, setStay] = useState(
    {
      checkIn: '2020-11-15',
      checkOut: '2020-11-16'
    }
  )
  console.log(stay, 'staying')
  const [occupancies, setOccupancies] = useState([
    {
      rooms: 1,
      adults: 1,
      children: 0
      // paxes: [{
      // type: '',
      // age: 0
      // }]
    }
  ]
  )
  console.log(occupancies, 'oaky')

  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)

  const handleClickButton = () => {
    // const { occupancies, destination, stay, reviews } = state
    const payLoad = { occupancies, destination, stay, reviews }
    console.log(payLoad, 'payload')
    requestAvailableHotels(db, payLoad)
      .then((hotelsProject) => {
        setProject(
          { ...project, results: hotelsProject }
        )
        setState({ fullBar: !intialState.fullBar })
      }).then(() => {
        props.done()
      })
  }
  const handleLocationChange = (code) => {
    console.log(code, 'code')
    setDestination({ code })
  }

  const handleDateChange1 = (NewDate1) => {
    const checkIn = NewDate1[0]
    const checkOut = NewDate1[1]
    setStay({ ...stay, checkIn, checkOut })
  }

  const handleOccChange = (event) => {
    const newOcc = event.target.value
    const { rooms, adults, children } = occupancies

    setOccupancies([{ rooms: 1, adults: newOcc, children: 0 }])
  }

  // { adults: newOcc, children: 0, rooms: 1 }

  const handleOccChange2 = (event) => {
    const newOcc = event.target.value
    const { rooms, adults, children } = occupancies
    setOccupancies([{ rooms: 1, adults: 1, children: newOcc }])
  }

  return (
    <>
      <div className='SearchBar'>

        <SearchField onChange={handleLocationChange} />

        <NewDateRange onChange={handleDateChange1} />
        <OccSelector label='Adult' onChange={handleOccChange} />
        <OccSelector label='Children' onChange={handleOccChange2} />
        {/* <Link to='/searchresults'> */}
        <Button variant='primary' onClick={handleClickButton}>Search</Button>{' '}
        {/* </Link> */}

      </div>

      {intialState.fullBar && <div className='SearchBarFilters'>
        <PriceSlider />
        <AmenitiesSelect />
        <StarRatingFilter />
                              </div>}

    </>
  )
}

export default SearchBar

import React, { useContext, useState } from 'react'
import SearchField from '../SearchField/SearchField'
import OccSelector from '../OccSelector/OccSelector'
import FirebaseContext from '../../providers/Firebase'
import Button from 'react-bootstrap/Button'
import PriceSlider from '../PriceSlider'
import AmenitiesSelect from '../AmenitiesSelect'
import StarRatingFilter from '../StarRatingFilter'
import NewDateRange from '../DateRange/NewDateRange'
import './SearchBar.css'
import { MyProvider, ProjectContext } from '../../providers/Provider'
import { requestAvailableHotels } from '../../handlers/ApiHandler'
import { Spinning } from '../Spinner'

const SearchBar = (props) => {
  const intialState = {
    results: {},
    hotels: [],
    redirect: false
  }
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)
  const [state, setState] = useState(intialState)
  const [fullbar, setFullBar] = useState(false)
  // console.log(fullbar, 'fullbar')
  const [isloading, setIsLoading] = useState(false)
  // console.log(isloading, 'isloading')
  const [destination, setDestination] = useState({
    code: 'IBZ'
  }
  )

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

  const handleClickButton = () => {
    const payLoad = { occupancies, destination, stay, reviews }
    // console.log(payLoad, 'payload')
    requestAvailableHotels(db, payLoad)
      .then((hotelsProject) => {
        setProject(
          { ...project, results: hotelsProject }
        )
      }).then(() => {
        props.done()
      })
  }

  const handleLocationChange = (code) => {
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

  const handleOccChange2 = (event) => {
    const newOcc = event.target.value
    const { rooms, adults, children } = occupancies
    setOccupancies([{ rooms: 1, adults: 1, children: newOcc }])
  }
  const updatePriceSelection = (hotelsResults) => {
    props.onChange(hotelsResults)
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
      <div className='SearchBarFilters'>

        <PriceSlider onChange={props.onChange} />
        <AmenitiesSelect onChange={props.onChange} />
        <StarRatingFilter onChange={props.onClick} />

      </div>

    </>

  )
}

export default SearchBar

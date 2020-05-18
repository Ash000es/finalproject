import React, { useContext, useState } from 'react'
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
import { MyProvider, ProjectContext } from '../../Helper/Provider'
import { Redirect } from 'react-router'
import { requestAvailableHotels } from '../../Helper/ApiHandler'
import { db, project, setProject } from '../../Helper/Constants'

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
    }],
    fullBar: false
  }

  const [state, setState] = useState(intialState)
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)

  console.log(project, 'first project')

  const handleClickButton = () => {
    const { occupancies, destination, stay, reviews } = state
    const payLoad = { occupancies, destination, stay, reviews }
    requestAvailableHotels(db, payLoad)
      .then((hotelsProject) => {
        setProject(
          { ...project, results: hotelsProject }
        )
        setState({ redirect: true, fullBar: !intialState.fullBar })
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
  }

  if (state.redirect) {
    return <Redirect exact push to='/searchresults' />
  }

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

      {intialState.fullBar ? <div className='SearchBarFilters'>
        <PriceSlider />
        <AmenitiesSelect />
        <StarRatingFilter />

                             </div> : null}

    </>
  )
}

export default SearchBar

import React, { useContext, useState } from 'react'
import SearchField from '../SearchField/SearchField'
import { withStyles } from '@material-ui/styles'
import FirebaseContext from '../../providers/Firebase'
import Button from 'react-bootstrap/Button'
import PriceSlider from '../PriceSlider'
import './SearchBar.css'
import { MyProvider, ProjectContext } from '../../providers/Provider'
import { requestAvailableHotels } from '../../handlers/ApiHandler'
import NewOccSelector from '../NewOccSelector'
import StartRatingSelect from '../NewStarRatingSelect'
import NewAmenitiesSelect from '../NewAmenitiesSelect'
import DateRangePickerWrapper from '../AirDateRange'
import { colorStyles } from '../../Helper/Constants'
const styles = {
  Button:
  {
    height: '2.975rem',
    backgroundColor: colorStyles.orange,
    borderColor: colorStyles.orange
  }
}
const SearchBar = (props) => {
  const intialState = {
    results: {},
    hotels: [],
    redirect: false
  }
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)
  const [state, setState] = useState(intialState)
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
    setProject(
      { ...project, results: [] }
    )

    props.startLoading()
    const payLoad = { occupancies, destination, stay, reviews }
    // console.log(payLoad, 'payload')
    requestAvailableHotels(db, payLoad)
      .then((hotelsProject) => {
        console.log(project, 'results here')
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
    const newOcc = event
    console.log(typeof newOcc, 'here')
    const { rooms, adults, children } = occupancies

    setOccupancies([{ rooms: 1, adults: newOcc, children: 0 }])
  }

  const handleOccChange2 = (event) => {
    const newOcc = event
    const { rooms, adults, children } = occupancies
    setOccupancies([{ rooms: 1, adults: 1, children: newOcc }])
  }

  return (
    <>

      <div className='SearchBar'>

        <SearchField onChange={handleLocationChange} />
        <DateRangePickerWrapper onChange={handleDateChange1} className='datePick' />
        <NewOccSelector onChange={handleOccChange} />
        <NewOccSelector onChange={handleOccChange2} />
        {/* <Link to='/searchresults'> */}
        <Button style={styles.Button} onClick={handleClickButton}>Search</Button>{' '}
        {/* </Link> */}

      </div>
      {props.fullbar &&
        <div className='SearchBarFilters'>

          <PriceSlider onChange={props.onChange} />
          <NewAmenitiesSelect onChange={props.handleAmenSelection} />
          <StartRatingSelect onChange={props.onClick} />

        </div>}

    </>

  )
}

export default SearchBar

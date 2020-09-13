import React, { useContext, useState } from 'react'
import 'antd/dist/antd.css'
import './SearchBar.css'
import SearchField from './SearchField'
import FirebaseContext from '../providers/Firebase'
import Button from 'react-bootstrap/Button'
import PriceSlider from './PriceSlider'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { requestAvailableHotels } from '../handlers/ApiHandler'
import NewOccSelector from './NewOccSelector'
import StartRatingSelect from './NewStarRatingSelect'
import NewAmenitiesSelect from './NewAmenitiesSelect'
import DateRangePickerWrapper from './AirDateRange'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.up(992)]: {
      backgroundColor: '#FF8B00 !important',
      borderColor: '#FF8B00 !important',
      height: 48,
      width: 95
    },
    [theme.breakpoints.between(835, 992)]: {
      backgroundColor: '#FF8B00 !important',
      borderColor: '#FF8B00 !important',
      height: 36,
      width: 94.8
    },
    [theme.breakpoints.down(835)]: {
      backgroundColor: '#FF8B00 !important',
      borderColor: '#FF8B00 !important',
      block: true
    }
  }
}))
const SearchBar = (props) => {
  const screenWidth = props.width
  const classes = useStyles()

  const intialState = {
    results: {},
    hotels: [],
    redirect: false
  }
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)
  const [state, setState] = useState(intialState)
  const [isloading, setIsLoading] = useState(false)
  const [destination, setDestination] = useState({
    code: 'IBZ'
  })

  const [reviews, setReviews] = useState([
    {
      type: 'TRIPADVISOR',
      minRate: 3,
      minReviewCount: 3
    }
  ])
  const [stay, setStay] = useState({
    checkIn: '2020-11-15',
    checkOut: '2020-11-16'
  })

  const [occupancies, setOccupancies] = useState([
    {
      rooms: 1,
      adults: 1,
      children: 0
    }
  ])
  const dailyRate = true

  const handleClickButton = () => {
    setProject({ ...project, results: [] })

    props.startLoading()
    const payLoad = { occupancies, destination, stay, reviews, dailyRate }
    requestAvailableHotels(db, payLoad)
      .then((hotelsProject) => {
        setProject({ ...project, results: hotelsProject })
      })
      .then(() => {
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
    const { rooms, adults, children } = occupancies

    setOccupancies([{ rooms: 1, adults: newOcc, children: 0 }])
  }

  const handleOccChange2 = (event) => {
    const newOcc = event
    const { rooms, adults, children } = occupancies
    setOccupancies([{ rooms: 1, adults: 1, children: newOcc }])
  }

  return (
    <div className='searchBar-outerDiv'>
      <div className='SearchBar'>
        <div className='searchBar-searchField'>
          <SearchField onChange={handleLocationChange} width={props.width} />
        </div>
        <div className='searchBar-datePicker'>
          <div className='extraDiv'>
            <DateRangePickerWrapper
              onChange={handleDateChange1}
              className='datePick'
              width={props.width}
            />
          </div>
          <div className='searchBar-occSelector'>
            <div>
              <NewOccSelector onChange={handleOccChange} width={props.width} />
            </div>

            <div>
              <NewOccSelector onChange={handleOccChange2} width={props.width} />
            </div>
          </div>
        </div>

        <div className='searchBar-Button'>
          <Button

            block={classes.root}
            onClick={handleClickButton}
            className={classes.root}
          >
            Search
          </Button>{' '}
        </div>
      </div>
      {props.fullbar && (
        <div className='SearchBarFilters'>
          <PriceSlider onChange={props.onChange} />
          <NewAmenitiesSelect onChange={props.handleAmenSelection} />
          <StartRatingSelect onChange={props.onClick} />
        </div>
      )}
    </div>
  )
}

export default SearchBar

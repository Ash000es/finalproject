import InfiniteScroll from 'react-infinite-scroll-component'
import React, { useContext, useState, useEffect } from 'react'
import { HotelCardSearch } from '../components/HotelCardSearch/HotelCardSearch'
import { DropDownFilter } from '../components/DropDownFilter/DropDownFilter'
import Typography from '@material-ui/core/Typography'
import SearchBar from '../components/SearchBar/SearchBar'
import { SearchResultsHero } from '../components/SearchResultsHero/SearchResultsHero'
import './HotelList.css'
import { VacationRental } from '../components/DropDownFilter/VCFilter'
import { HotelsOnly } from '../components/DropDownFilter/HotelsOnlyFilter'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { Redirect } from 'react-router'
import MapPopUp from '../components/Map/MapPopUp'
import { Spinning } from '../components/Spinner'
import Button from 'react-bootstrap/Button'
import { DEFAULT_SLIDER_VALUE } from '../components/PriceSlider'
import { updatePrice, showHotelsOnly, showHomesOnly, readyTheArgument, updateStarRatings } from '../Helper/Helper'
import { vcCodes, hotelcodes } from '../Helper/Constants'

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8
}

export const HotelList = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [redirect, setRedirect] = useState(false)
  const [hotelsresults, setHotelsResults] = useState([])
  const [resultsstart, setResultsStart] = useState(0)
  const [hasmore, setHasMore] = useState(true)
  const [isloading, setIsLoading] = useState(false)
  const [tempfilteredhotels, setTempFilteredHotels] = useState([])
  console.log(hotelsresults, 'results to dispaly')
  console.log(tempfilteredhotels, 'tempfilteredhotels to dispaly')

  const resultsPerPage = 5
  const allHotelsResults = project.results
  const googleLandingLat = allHotelsResults[0].latitude
  const googleLandingLong = allHotelsResults[0].longitude

  useEffect(() => {
    const intialLoad = allHotelsResults.slice(resultsstart, resultsPerPage)
    setHotelsResults(intialLoad)
  }, [])

  const fetchMoreData = () => {
    const indexOfFirstHotel = resultsstart + resultsPerPage
    const indexOfFLastHotel = indexOfFirstHotel + resultsPerPage
    const newLoad = allHotelsResults.slice(indexOfFirstHotel, indexOfFLastHotel)
    setResultsStart(indexOfFirstHotel)
    setHotelsResults(hotelsresults.concat(newLoad))
  }

  const onCompelet = () => {
    setRedirect(true)
  }
  if (redirect) {
    return <Redirect exact push to='/hotelpage' />
  }
  const handleSortByPrice = (res) => {
    console.log(res, 'sorted here')
    setTempFilteredHotels(res)
  }
  const handleFilteredHomes = () => {
    const res = showHomesOnly(tempfilteredhotels, hotelsresults, hotelcodes)
    if (res) {
      setTempFilteredHotels(res)
    } else {
      setTempFilteredHotels([])
    }
  }

  const handleFilteredHotels = (e) => {
    console.log(e)
    const res = showHotelsOnly(tempfilteredhotels, hotelsresults, vcCodes)
    if (res) {
      setTempFilteredHotels(res)
    } else {
      setTempFilteredHotels([])
    }
  }

  const updateStarRating = (proby) => {
    const res = updateStarRatings(hotelsresults, proby)
    if (res) {
      setTempFilteredHotels(res)
    } else {
      setTempFilteredHotels([])
    }
  }
  const updateAmenSelection = (arr) => {
    // function here
  }
  const updatePriceResults = (sliderrange) => {
    const res = updatePrice(sliderrange, DEFAULT_SLIDER_VALUE, hotelsresults)

    if (res) {
      setTempFilteredHotels(res)
    } else {
      setTempFilteredHotels([])
    }
  }

  const resultsToMap = (arr1, arr) => {
    if (arr1.length >= 1) {
      return arr1
    } else {
      return arr
    }
  }
  const valueToMap = resultsToMap(tempfilteredhotels, hotelsresults)
  console.log(valueToMap, 'value to map')

  return (

    <div>
      <InfiniteScroll
        dataLength={hotelsresults.length}
        next={fetchMoreData}
        hasMore={hotelsresults.length < allHotelsResults.length}
        loader={tempfilteredhotels.length >= 1 ? null : <h4>Loading...</h4>}
        scrollThreshold={0.5}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className='HotelList'>
          <SearchResultsHero />
          <SearchBar onChange={updatePriceResults} onClick={updateStarRating} updateAmenities={updateAmenSelection} />
          <div>
            <HotelsOnly onClick={handleFilteredHotels} /><VacationRental onClick={handleFilteredHomes} /><MapPopUp lat={googleLandingLat} long={googleLandingLong} mapHotelsResults={valueToMap} />
            <Typography />

            <div className='sortButton'>
              <DropDownFilter HotelsResults={valueToMap} onClick={handleSortByPrice} />
            </div>
            <br />

            {valueToMap && valueToMap.map(hotel => {
              return <HotelCardSearch done={onCompelet} key={hotel.code} hotel={hotel} />
            })}

          </div>

        </div>

      </InfiniteScroll>
    </div>

  )
}

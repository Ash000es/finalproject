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
import { updatePrice, showHotelsOnly, showHomesOnly, updateStarRatings, sortbyPrice, sortByReview, sortByRecommended } from '../Helper/Helper'
import { vcCodes, hotelcodes, amenCodes } from '../Helper/Constants'
import { TableCell } from '@material-ui/core'

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8
}

const PRICE_FILTER_MIN = 0
const PRICE_FILTER_MAX = 1000
const initialFilterState = {
  hotelsOnly: false,
  villasOnly: false,
  starRating: [],
  priceFilter: [PRICE_FILTER_MIN, PRICE_FILTER_MAX],
  sortBy: ''
}

export const HotelList = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [redirect, setRedirect] = useState(false)
  const [hotelsresults, setHotelsResults] = useState([])
  const [resultsstart, setResultsStart] = useState(0)
  const [hasmore, setHasMore] = useState(true)
  const [isloading, setIsLoading] = useState(false)
  const [tempfilteredhotels, setTempFilteredHotels] = useState([])
  const [filters, setFilters] = useState(initialFilterState)

  console.log('hotelsresults', hotelsresults)
  console.log('tempfilteredhotels', tempfilteredhotels)
  console.log(filters, 'filters status')

  const resultsPerPage = 5
  const allHotelsResults = project.results
  const googleLandingLat = allHotelsResults[0].latitude
  const googleLandingLong = allHotelsResults[0].longitude

  useEffect(() => {
    const intialLoad = allHotelsResults.slice(resultsstart, resultsPerPage)
    setHotelsResults(intialLoad)
  }, [])
  const onCompelet = () => {
    setIsLoading(false)
    setRedirect(true)
  }
  const startLoading = () => {
    setIsLoading(true)
  }

  const fetchMoreData = () => {
    const indexOfFirstHotel = resultsstart + resultsPerPage
    const indexOfFLastHotel = indexOfFirstHotel + resultsPerPage
    const newLoad = allHotelsResults.slice(indexOfFirstHotel, indexOfFLastHotel)
    setResultsStart(indexOfFirstHotel)
    setHotelsResults(hotelsresults.concat(newLoad))
  }

  if (redirect) {
    return <Redirect exact push to='/hotelpage' />
  }
  // ture= on false= off villasOnly
  const handleFilteredHomes = () => {
    const change = { ...filters, villasOnly: !filters.villasOnly }
    filterAll(change)
  }
  // ture= on false= off hotelsOnly
  const handleFilteredHotels = (e) => {
    const change = { ...filters, hotelsOnly: !filters.hotelsOnly }
    filterAll(change)
  }

  const filterAll = (filters) => {
    // start by setting it to neutral
    let res = hotelsresults

    // begin applying all special cases of filters that are ON
    if (filters.hotelsOnly) {
      res = showHotelsOnly(res, hotelsresults, vcCodes)
    }
    if (filters.villasOnly) {
      res = showHomesOnly(res, hotelsresults, hotelcodes)
    }
    if (filters.starRating.includes('3 STARS') || filters.starRating.includes('4 STARS') || filters.starRating.includes('5 STARS')) {
      res = updateStarRatings(res, hotelsresults, filters.starRating)
    }
    if (filters.priceFilter[0] > PRICE_FILTER_MIN || filters.priceFilter[1] < PRICE_FILTER_MAX) {
      res = updatePrice(filters.priceFilter[0], filters.priceFilter[1], res, hotelsresults)
    }
    if (filters.sortBy === 'Sortby Price') {
      res = sortbyPrice(res, hotelsresults)
    }
    if (filters.sortBy === 'Sortby review') {
      res = sortByReview(res, hotelsresults)
    }
    if (filters.sortBy === 'Sortby recommended') {
      res = sortByRecommended(res, hotelsresults)
    }
    setTempFilteredHotels(res)
    setFilters(filters)
  }

  // ["3 STARS", "4 STARS"] starRatings
  const updateStarRating = (proby) => {
    console.log(proby, 'here')
    const change = { ...filters, starRating: proby }
    filterAll(change)

    // setTempFilteredHotels(res)
  }
  // [2, 100] priceFilter
  const updatePriceResults = (sliderrange) => {
    const change = { ...filters, priceFilter: sliderrange }
    filterAll(change)
  }
  // 'Sortby Price','Sortby review', sortBy
  const handleSort = (sortByValue) => {
    const change = { ...filters, sortBy: sortByValue }
    filterAll(change)
  }

  const resultsToMap = (arr1, arr) => {
    if (arr1.length > 0) {
      return arr1
    } else {
      return arr
    }
  }
  const valueToMap = resultsToMap(tempfilteredhotels, hotelsresults)

  const updateAmenSelection = (arr) => {
    // function here
  }
  const style = {
    height: '100%',
    width: '100%'
  }

  return (

    <div style={style}>
      <InfiniteScroll
        style={style}
        dataLength={valueToMap.length}
        next={fetchMoreData}
        hasMore={valueToMap.length < allHotelsResults.length}
        // loader={valueToMap.length >= 1 ? null : <h4>Loading...</h4>}
        scrollThreshold={0.8}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className='HotelList'>
          <SearchResultsHero />
          <SearchBar startLoading={startLoading} done={onCompelet} onChange={updatePriceResults} onClick={updateStarRating} updateAmenities={updateAmenSelection} fullbar />
          <div>
            <HotelsOnly onClick={handleFilteredHotels} /><VacationRental onClick={handleFilteredHomes} /><MapPopUp lat={googleLandingLat} long={googleLandingLong} mapHotelsResults={valueToMap} />
            <Typography />

            <div className='sortButton'>
              <DropDownFilter onClick={handleSort} />
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

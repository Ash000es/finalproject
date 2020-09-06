import InfiniteScroll from 'react-infinite-scroll-component'
import { makeStyles } from '@material-ui/core/styles'
import React, { useContext, useState, useEffect } from 'react'
import { HotelCardSearch } from '../components/HotelCardSearch'
import { DropDownFilter } from '../components/DropDownFilter'
import Typography from '@material-ui/core/Typography'
import SearchBar from '../components/SearchBar'
import { SearchResultsHero } from '../components/SearchResultsHero'
import './HotelList.css'
import { AccomodationTypeFilter } from '../components/AccomodationTypeFilter'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { Redirect } from 'react-router'
import MapPopUp from '../components/MapPopUp'
import { Spinning } from '../components/Spinner'
import { DEFAULT_SLIDER_VALUE } from '../components/PriceSlider'
import { updatePrice, showHotelsOnly, showHomesOnly, updateStarRatings, sortbyPrice, sortByReview, sortByRecommended, filterAmenSelection, useWindowSize, createNewAmenitiesArray, removeAmenDuplicates } from '../Helper/Helper'
import { vcCodes, hotelcodes, amenCodes } from '../Helper/Constants'
import { searchResultsAmen } from '../Helper/SearchResultsAmen'

const useStyles = makeStyles((theme) => ({
  filters: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'

  },
  hotelHomeButton: {
    display: 'flex',
    justifyContent: 'flex-end'

  },
  destinationName: {
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(17),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    textDecoration: 'underline',
    marginTop: '1.375rem'

  },
  scrollRoot: {
    width: '100%',
    height: '100%'
  }
}))

const PRICE_FILTER_MIN = 0
const PRICE_FILTER_MAX = 1000
const initialFilterState = {
  hotelsOnly: false,
  villasOnly: false,
  starRating: [],
  Amenities: [],
  priceFilter: [DEFAULT_SLIDER_VALUE[0], DEFAULT_SLIDER_VALUE[1]],
  sortBy: ''
}

export const HotelList = () => {
  const classes = useStyles()
  const { project, setProject } = useContext(ProjectContext)
  const [redirect, setRedirect] = useState(false)
  const [hotelsresults, setHotelsResults] = useState([])
  const [resultsstart, setResultsStart] = useState(0)
  const [hasmore, setHasMore] = useState(true)
  const [isloading, setIsLoading] = useState(false)
  const [tempfilteredhotels, setTempFilteredHotels] = useState([])
  const [filters, setFilters] = useState(initialFilterState)
  const [currentHotel, setCurrentHotel] = useState({})
  const resultsPerPage = 5
  const allHotelsResults = project.results
  const googleLandingLat = (allHotelsResults.length) ? allHotelsResults[0].latitude : null
  const googleLandingLong = (allHotelsResults.length) ? allHotelsResults[0].longitude : null
  const size = useWindowSize()
  const width = size.width

  // fetch from context first 5 results to display
  useEffect(() => {
    const intialLoad = allHotelsResults.slice(resultsstart, resultsPerPage)
    const addAmenArr = intialLoad.map(hotel => {
      const amenitiesToMap = createNewAmenitiesArray(hotel.facilities, searchResultsAmen)
      const newAmenFinal = removeAmenDuplicates(amenitiesToMap)
      const newHotel = { ...hotel, newAmen: newAmenFinal }

      return newHotel
    })

    setHotelsResults(addAmenArr)
  }, [])

  const onCompelet = (currentHotel) => {
    setCurrentHotel(currentHotel)

    setIsLoading(false)
    setRedirect(true)
  }
  const startLoading = () => {
    setIsLoading(true)
  }
  // as user scroll down, results gets populated with 5 new hotels at the time
  const fetchMoreData = () => {
    const indexOfFirstHotel = resultsstart + resultsPerPage
    const indexOfFLastHotel = indexOfFirstHotel + resultsPerPage
    const newLoad1 = allHotelsResults.slice(indexOfFirstHotel, indexOfFLastHotel)
    const newLoad = newLoad1.map(hotel => {
      const amenitiesToMap = createNewAmenitiesArray(hotel.facilities, searchResultsAmen)
      const newHotelFinal = removeAmenDuplicates(amenitiesToMap)
      const newHotel = { ...hotel, newAmen: newHotelFinal }

      return newHotel
    })
    setResultsStart(indexOfFirstHotel)
    setHotelsResults(hotelsresults.concat(newLoad))
  }

  // when a user selects a hotel, props is passed to <HotelPage/> via redirect

  if (redirect) {
    return <Redirect
      to={{
        pathname: '/hotelpage',
        state: { currentHotel }
      }}
           />
  }
  // Each Filter state is managed below to feed into the global filter state Object
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
  // ['TV', 'Pool']
  const handleAmenSelection = (arr) => {
    const change = { ...filters, Amenities: arr }

    filterAll(change)
  }
  // ["3 STARS", "4 STARS"] starRatings
  const updateStarRating = (proby) => {
    const change = { ...filters, starRating: proby }
    filterAll(change)
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

  // filter the results based on the global filter state object
  const filterAll = (filters) => {
    // start by setting it to neutral
    let res = hotelsresults

    // applying all special cases of filters that are ON
    if (filters.hotelsOnly) {
      res = showHotelsOnly(res, hotelsresults, vcCodes)
    }
    if (filters.villasOnly) {
      res = showHomesOnly(res, hotelsresults, hotelcodes)
    }
    if (filters.starRating.includes('3 stars') || filters.starRating.includes('4 stars') || filters.starRating.includes('5 stars')) {
      res = updateStarRatings(res, hotelsresults, filters.starRating)
    }
    if (filters.Amenities.length > 0) {
      res = filterAmenSelection(res, hotelsresults, filters.Amenities)
      console.log(res, 'res amen here')
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

  // quick check to see which array to be mapped, an already filtered array or the original with no filters applied
  const resultsToMap = (arr1, arr) => {
    if (arr1.length && arr1.length > 0) {
      return arr1
    } else {
      return arr
    }
  }
  const valueToMap = resultsToMap(tempfilteredhotels, hotelsresults)
  const style = {
    height: '100%',
    width: '100%'
  }
  return (
    <>
      {!allHotelsResults.length ? <Spinning />
        : <div style={style}>
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
              <div>
                <SearchResultsHero />
              </div>
              <div style={{ margin: '3rem auto' }}>
                <SearchBar width={width} startLoading={startLoading} done={onCompelet} onChange={updatePriceResults} onClick={updateStarRating} handleAmenSelection={handleAmenSelection} fullbar />
              </div>
              <div className={classes.filters}>
                <div><MapPopUp lat={googleLandingLat} long={googleLandingLong} mapHotelsResults={valueToMap} /></div> <div className={classes.hotelHomeButton}><AccomodationTypeFilter onClick={handleFilteredHotels} name='Hotels' /><AccomodationTypeFilter onClick={handleFilteredHomes} name='homelike' /></div>

              </div>
              <div style={{ border: '1px solid grey' }}>
                <Typography className={classes.destinationName}>{allHotelsResults[0].destinationName}</Typography>
                <div className='sortButton'>
                  <DropDownFilter onClick={handleSort} />
                </div>
                <br />
                <div style={{ margin: '1rem auto' }}>
                  {valueToMap && valueToMap.map(hotel => {
                    return <HotelCardSearch done={onCompelet} key={hotel.code} hotel={hotel} />
                  })}
                </div>
              </div>

            </div>

          </InfiniteScroll>
          </div>}
    </>
  )
}

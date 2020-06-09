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

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8
}

const HotelList = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [redirect, setRedirect] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hotelsresults, setHotelsResults] = useState([])
  console.log(hotelsresults, 'I am inital results state')

  const resultsPerPage = 5
  const [resultsstart, setResultsStart] = useState(0)
  const [hasmore, setHasMore] = useState(true)
  const allHotelsResults = project.results
  console.log(allHotelsResults.length)

  const googleLandingLat = allHotelsResults[0].latitude
  const googleLandingLong = allHotelsResults[0].longitude

  useEffect(() => {
    // setIsLoading(true)
    console.log('useeffect123')
    const intialLoad = allHotelsResults.slice(resultsstart, resultsPerPage)
    setHotelsResults(intialLoad)
    // setIsLoading(false)
  }, [])

  const fetchMoreData = () => {
    console.log('fetchdata on scroll 123')
    const indexOfFirstHotel = resultsstart + resultsPerPage
    console.log(indexOfFirstHotel, '<>')
    const indexOfFLastHotel = indexOfFirstHotel + resultsPerPage
    console.log(indexOfFLastHotel, '<>')
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
  const handleFilteredHotels = (res) => {
    setHotelsResults(res)
  }
  const updatePriceResults = (results) => {
    setHotelsResults(results)
  }
  console.log('temp results: ', hotelsresults.length, 'all results:', allHotelsResults.length)

  return (

    <div style={{ height: 3000, overflow: 'auto' }}>
      <InfiniteScroll
        dataLength={allHotelsResults.length}
        next={fetchMoreData}
        hasMore={hotelsresults.length < allHotelsResults.length}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.5}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }

      >
        <div className='HotelList'>
          <SearchResultsHero />
          <SearchBar onChange={updatePriceResults} hotelsresults={hotelsresults} />

          <div>
            <HotelsOnly hotels={hotelsresults} onClick={handleFilteredHotels} /><VacationRental homes={hotelsresults} /><MapPopUp lat={googleLandingLat} long={googleLandingLong} mapHotelsResults={hotelsresults} />
            <Typography />

            <div className='sortButton'>
              <DropDownFilter />
            </div>
            <br />

            {hotelsresults && hotelsresults.map(hotel => {
              return <HotelCardSearch done={onCompelet} key={hotel.code} hotel={hotel} />
            })}

          </div>

        </div>

      </InfiniteScroll>
    </div>

  )
}
export default HotelList

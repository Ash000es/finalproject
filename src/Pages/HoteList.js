import React, { useContext, useState } from 'react'
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

const HotelList = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [redirect, setRedirect] = useState(false)
  const hotelsResults = project.results
  const googleLandingLat = hotelsResults[0].latitude
  const googleLandingLong = hotelsResults[0].longitude
  const onCompelet = () => {
    setRedirect(true)
  }
  if (redirect) {
    return <Redirect exact push to='/hotelpage' />
  }

  return (
    <div className='HotelList'>
      <SearchResultsHero />
      <SearchBar />
      <>
        <HotelsOnly /><VacationRental /><MapPopUp lat={googleLandingLat} long={googleLandingLong} />
        <Typography />

        <div className='sortButton'>
          <DropDownFilter />
        </div>
        <br />

        {hotelsResults && hotelsResults.map(hotel => {
          return <HotelCardSearch done={onCompelet} key={hotel.code} hotel={hotel} />
        })}

      </>

    </div>

  )
}

export default HotelList

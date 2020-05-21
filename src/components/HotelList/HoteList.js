import React, { useContext, useState } from 'react'
import { HotelCardSearch } from '../HotelCardSearch/HotelCardSearch'
import { DropDownFilter } from '../DropDownFilter/DropDownFilter'
import Typography from '@material-ui/core/Typography'
import SearchBar from '../../components/SearchBar/SearchBar'
import { SearchResultsHero } from '../../components/SearchResultsHero/SearchResultsHero'
import './HotelList.css'
import { VacationRental } from '../DropDownFilter/VCFilter'
import { HotelsOnly } from '../DropDownFilter/HotelsOnlyFilter'
import { MyProvider, ProjectContext } from '../../Helper/Provider'
import { Redirect } from 'react-router'

const HotelList = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [redirect, setRedirect] = useState(false)
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
        <HotelsOnly /><VacationRental />
        <Typography />

        <div className='sortButton'>
          <DropDownFilter />
        </div>
        <br />

        {project.results && project.results.map(hotel => {
          return <HotelCardSearch done={onCompelet} key={hotel.code} hotel={hotel} />
        })}

      </>

    </div>

  )
}

export default HotelList

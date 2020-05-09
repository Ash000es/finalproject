import React, { useContext } from 'react'
import { SearchResultsHero } from '../SearchResultsHero/SearchResultsHero'
import { HotelCardSearch } from '../HotelCardSearch/HotelCardSearch'
import { DropDownFilter } from '../DropDownFilter/DropDownFilter'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { hardHotelObject } from '../assets/HardCode'
import './HotelList.css'
import { VacationRental } from '../DropDownFilter/VCFilter'
import { HotelsOnly } from '../DropDownFilter/HotelsOnlyFilter'
import { Link } from 'react-router-dom'
import { MyProvider, ProjectContext } from '../Provider'

const HotelList = () => {
  const { project, setProject } = useContext(ProjectContext)
  return (
    <div className='HotelList'>

      <>
        <HotelsOnly /><VacationRental />
        <Typography />

        <div className='sortButton'>
          <DropDownFilter />
        </div>
        <br />
        {/* TODO: you can write `project.hotels && project.hotels.map()` instead and skip the else-statement */}
        {project.hotels ? project.hotels.map(hotel => {
          return <HotelCardSearch key={hotel.code} hotel={hotel} />
        }) : console.log('I am not true')}

      </>

    </div>

  )
}

export default HotelList

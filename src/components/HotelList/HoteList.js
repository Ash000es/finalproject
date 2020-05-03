import React, { useContext } from 'react'
import { SearchResultsHero } from '../SearchResultsHero/SearchResultsHero'
import { DetailedExpansionPanel } from '../HotelCardSearch/HotelCardSearch2'
import { DropDownFilter } from '../DropDownFilter/DropDownFilter'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { hardHotelObject } from '../assets/HardCode'
import './HotelList.css'
import { vacationRental } from '../DropDownFilter/VCFilter'
import { hotelsOnly } from '../DropDownFilter/HotelsOnlyFilter'
import { Link } from 'react-router-dom'
import { MyProvider, ProjectContext } from '../Provider/Provider'

const HotelList = () => {
  const { project, setProject } = useContext(ProjectContext)
  return (
    <div className='HotelList'>

      <>
        <hotelsOnly /><vacationRental />
        <Typography />

        <div className='sortButton'>
          <DropDownFilter />
        </div>
        <br />
        {/* { */}
        {project.hotels ? project.hotels.map(hotel => {
          return <DetailedExpansionPanel key={hotel.code} hotel={hotel} />
        }) : console.log('I am not true')}

      </>

    </div>

  )
}

export default HotelList

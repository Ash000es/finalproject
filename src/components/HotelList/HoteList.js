import React, { useContext } from 'react'

import { HotelCardSearch } from '../HotelCardSearch/HotelCardSearch'
import { DropDownFilter } from '../DropDownFilter/DropDownFilter'
import Typography from '@material-ui/core/Typography'

import './HotelList.css'
import { VacationRental } from '../DropDownFilter/VCFilter'
import { HotelsOnly } from '../DropDownFilter/HotelsOnlyFilter'
import { Link } from 'react-router-dom'
import { MyProvider, ProjectContext } from '../../Helper/Provider'

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

        {project.results && project.results.map(hotel => {
          return <HotelCardSearch key={hotel.code} hotel={hotel} />
        })}

      </>

    </div>

  )
}

export default HotelList

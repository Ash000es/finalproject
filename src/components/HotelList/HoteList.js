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
import { MyProvider, MyContext } from '../Provider/Provider'

const HotelList = () => {
  // const newHotels = context.state.results.hotels.hotels
  // console.log(newHotels)
  const [project, setProject] = useContext(MyContext)
  return (
    <div className='HotelList'>
      {/* <MyContext.Consumer> */}
      {/* {(context) => ( */}

      <>
        <hotelsOnly /><vacationRental />
        <Typography />

        <div className='sortButton'>
          <DropDownFilter />
        </div>
        <br />

        <div className='list'>
          <h4>I am here</h4>

          {/* { */}
          {/* MyContext.state.results.hotels.hotels ? MyContext.state.results.hotels.hotels.map(hotel => { */}
          {/* return <DetailedExpansionPanel key={hotel.code} hotel={hotel} /> */}
          {/* }) : console.log('I am not true') */}
          {/* } */}

        </div>

      </>
      {/* )} */}

      {/* </MyContext.Consumer> */}

    </div>

  )
}

export default HotelList

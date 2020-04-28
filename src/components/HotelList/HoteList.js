import React from 'react'
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

class HotelList extends React.Component {
  // sort function for the dropdown filter onClick
  // sortByReviews (arr) {
  // arr.sort(function (a, b) {
  // return b.vote_count - a.vote_count
  // })
  // }

  render () {
    const newHotels = this.props.hotels.hotels
    console.log(newHotels)
    return (
      <div className='HotelList'>
        <hotelsOnly /><vacationRental />

        {newHotels ? newHotels.map(hotel => <Typography key={hotel}>{newHotels.destinationName}</Typography>) : null}
        <div className='sortButton'>
          <DropDownFilter />
        </div>
        <br />
        <br />
        <div className='list'>

          {
            newHotels ? newHotels.map(hotel => {
              return <DetailedExpansionPanel key={hotel.code} hotel={hotel} />
            }) : console.log('I am not true')
          }

        </div>

      </div>
    )
  }
}

export default HotelList

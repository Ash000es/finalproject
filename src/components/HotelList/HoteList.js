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

class HotelList extends React.Component {
  // sort function for the dropdown filter onClick
  sortByReviews (arr) {
    arr.sort(function (a, b) {
      return b.vote_count - a.vote_count
    })
  }

  render () {
    return (
      <div className='HotelList'>
        <hotelsOnly /><vacationRental />
        {/* <SearchResultsHero /> */}
        <Typography>{hardHotelObject.destinationName}</Typography>
        <div className='sortButton'>
          <DropDownFilter />
        </div>
        <br />
        <br />
        <div className='list'>
          <DetailedExpansionPanel />
          <DetailedExpansionPanel />
          <DetailedExpansionPanel />
          <DetailedExpansionPanel />
          <DetailedExpansionPanel />
        </div>

      </div>
    )
  }
}

export default HotelList

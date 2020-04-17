import React from 'react'
import { SearchResultsHero } from '../SearchResultsHero/SearchResultsHero'
import { DetailedExpansionPanel } from '../HotelCardSearch/HotelCardSearch2'
import { DropDownFilter } from '../DropDownFilter/DropDownFilter'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { hardHotelObject } from '../assets/HardCode'

class HotelList extends React.Component {
  render () {
    return (
      <div className='HotelList'>
        <SearchResultsHero />
        <Typography>{hardHotelObject.destinationName}</Typography>
        <DropDownFilter />
        <DetailedExpansionPanel />
        <DetailedExpansionPanel />
        <DetailedExpansionPanel />
        <DetailedExpansionPanel />
        <DetailedExpansionPanel />

      </div>
    )
  }
}

export default HotelList

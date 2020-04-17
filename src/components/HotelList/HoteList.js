import React from 'react'
import { SearchResultsHero } from '../SearchResultsHero/SearchResultsHero'
import DetailedExpansionPanel from '../HotelCardSearch/HotelCardSearch2'

class HotelList extends React.Component {
  render () {
    return (
      <div className='HotelList'>
        <SearchResultsHero />
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

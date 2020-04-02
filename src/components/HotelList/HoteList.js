import React from 'react'
// import '../HotelList/HotelList.css'

// import HotelCardSearch from '../HotelCardSearch/HotelCardSearch'
import DetailedExpansionPanel from '../HotelCardSearch/HotelCardSearch2'
// import Extras from '../Extras/Extras'

class HotelList extends React.Component {
  render () {
    return (
      <div className='HotelList'>
        <DetailedExpansionPanel />
        {/* <Extras /> */}
        <DetailedExpansionPanel />
        <DetailedExpansionPanel />
        <DetailedExpansionPanel />
        <DetailedExpansionPanel />

      </div>
    )
  }
}

export default HotelList

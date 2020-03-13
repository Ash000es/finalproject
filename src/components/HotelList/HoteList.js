import React from 'react'
import '../HotelList/HotelList.css'

import Hotel from '../Hotel/Hotel'
import Extras from '../Extras/Extras'

class HotelList extends React.Component {
  render () {
    return (
      <div className='HotelList'>
        <Hotel />
        <Extras />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />

      </div>
    )
  }
}

export default HotelList

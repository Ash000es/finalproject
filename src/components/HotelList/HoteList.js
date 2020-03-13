import React from 'react'
import '../HotelList/HotelList.css'

import Hotel from '../Hotel/Hotel'

class HotelList extends React.Component {
  render () {
    return (
      <div className='HotelList'>
        <Hotel />
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

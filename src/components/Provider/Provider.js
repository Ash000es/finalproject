import React, { useState } from 'react'
import HotelList from '../HotelList/HoteList'
import HotelPage from '../Hotelpage/HotelPage'
import SearchBar from '../SearchBar/SearchBar'
export const MyContext = React.createContext()

export const MyProvider = () => {
  const [project, setProject] = useState([
    {
      results: {},
      stay: {
        checkIn: '2020-11-15',
        checkOut: '2020-11-16'
      },
      occupancies: [
        {
          rooms: 1,
          adults: 1,
          children: 0,
          paxes: [{
            type: '',
            age: 0
          }]
        }
      ],
      destination: {
        code: 'IBZ'

      },
      hotels: [],
      redirect: false
    }])
const
  return (
    <MyContext.Provider value={ [project: setProject ]}>
      <HotelList />
      <HotelPage />

    </MyContext.Provider>

  )
}

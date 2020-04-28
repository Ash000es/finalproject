import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import HotelList from '../HotelList/HoteList'
import Hero from '../Hero/Hero'

export const HoteList2 = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <HotelList />
    </div>
  )
}

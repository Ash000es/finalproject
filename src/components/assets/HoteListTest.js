import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import HotelList from '../HotelList/HoteList'
import HomePageHero from '../HomePageHero/HomePageHero'

export const HotelList2 = () => {
  return (
    <div>
      <HomePageHero />
      <SearchBar />
      <HotelList />
    </div>
  )
}

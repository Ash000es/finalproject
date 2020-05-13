import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import { SearchResultsHero } from '../components/SearchResultsHero/SearchResultsHero'
import HotelList from '../components/HotelList/HoteList'

export const SearchResultsPage = () => {
  return (
    <>
      <SearchResultsHero />
      <SearchBar />
      <HotelList />

    </>
  )
}

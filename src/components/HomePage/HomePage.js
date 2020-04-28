import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import HomePageResults from '../HomePageResults/HomepageResults'
import Hero from '../Hero/Hero'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <HomePageResults />
    </>
  )
}

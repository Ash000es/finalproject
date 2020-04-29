import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import HomePageResults from '../HomePageResults/HomepageResults'
import Hero from '../Hero/Hero'
import { MyProvider } from '../Provider/Provider'
const MyContext = React.createContext()

export const HomePage = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <HomePageResults />
    </>
  )
}

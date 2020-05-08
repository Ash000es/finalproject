import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import HomePageResults from '../components/HomePageResults/HomepageResults'
import Hero from '../components/Hero/Hero'
import { MyProvider } from '../components/Provider/Provider'
const ProjectContext = React.createContext()

export const HomePage = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <HomePageResults />
    </>
  )
}

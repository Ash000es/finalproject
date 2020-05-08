import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import HomePageResults from '../components/HomePageResults/HomepageResults'
import HomePageHero from '../components/HomePageHero/HomePageHero'
import { MyProvider } from '../components/Provider'
const ProjectContext = React.createContext()

export const HomePage = () => {
  return (
    <>
      <HomePageHero />
      <SearchBar />
      <HomePageResults />
    </>
  )
}

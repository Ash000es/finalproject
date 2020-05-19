
import React, { useContext, useState } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import HomePageResults from '../components/HomePageResults/HomepageResults'
import HomePageHero from '../components/HomePageHero/HomePageHero'
import { Redirect } from 'react-router'

export const HomePage = () => {
  const [redirect, setRedirect] = useState(false)
  const onCompelet = () => {
    setRedirect(true)
  }
  if (redirect) {
    return <Redirect exact push to='/searchresults' />
  }
  return (
    <>
      <HomePageHero />
      <SearchBar done={onCompelet} />
      <HomePageResults />
    </>
  )
}

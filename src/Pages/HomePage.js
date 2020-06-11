
import React, { useContext, useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import HomePageResults from '../components/HomePageResults/HomepageResults'
import HomePageHero from '../components/HomePageHero/HomePageHero'
import { Redirect } from 'react-router'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { Spinning } from '../components/Spinner'

export const HomePage = () => {
  const [redirect, setRedirect] = useState(false)
  const { project, setProject } = useContext(ProjectContext)
  const [fullbar, setFullBar] = useState(false)
  // console.log(fullbar, 'fullbar')
  const [isloading, setIsLoading] = useState(false)
  console.log(isloading, 'isloading')

  const onCompelet = () => {
    setRedirect(true)
  }
  if (redirect) {
    return <Redirect exact push to='/searchresults' />
  }
  return (
    <>
      <HomePageHero />
      <SearchBar done={onCompelet} isloading={isloading} fullbar={fullbar} />
      {isloading ? <Spinning /> : <HomePageResults />}
    </>
  )
}

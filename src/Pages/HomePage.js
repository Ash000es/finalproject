
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
  const hotelResults = project.results
  console.log(redirect, 'redirect from homepage')
  const [isloading, setIsLoading] = useState(false)
  // console.log(isloading, 'isloading')
  const style = {
    width: '100%',
    height: '100%',
    postion: 'fixed',
    marginRight: 0,
    marginLeft: 0
  }
  const onCompelet = () => {
    setIsLoading(false)
    setRedirect(true)
  }
  const startLoading = () => {
    setIsLoading(true)
  }
  if (redirect && hotelResults.length) {
    return <Redirect exact push to='/searchresults' />
  }
  return (
    <div style={style}>
      <HomePageHero />
      <SearchBar done={onCompelet} fullbar={false} startLoading={startLoading} />
      {isloading ? <Spinning /> : <HomePageResults />}
    </div>
  )
}

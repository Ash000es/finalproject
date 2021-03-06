
import React, { useContext, useState } from 'react'
import SearchBar from '../components/SearchBar'
import HomePageResults from '../components/HomepageResults'
import HomePageHero from '../components/HomePageHero'
import { Redirect } from 'react-router'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { Spinning } from '../components/Spinner'
import { useWindowSize } from '../Helper/Helper'

export const HomePage = () => {
  const [redirect, setRedirect] = useState(false)
  const { project, setProject } = useContext(ProjectContext)
  const hotelResults = project.results
  const [isloading, setIsLoading] = useState(false)
  const size = useWindowSize()
  const width = size.width

  const style = {
    width: '100%',
    height: '100%',

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
      <SearchBar done={onCompelet} fullbar={false} startLoading={startLoading} width={width} />
      {isloading ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinning /> </div> : <HomePageResults width={width} />}
    </div>
  )
}

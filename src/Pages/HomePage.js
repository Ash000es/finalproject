
import React, { useContext, useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import HomePageResults from '../components/HomePageResults/HomepageResults'
import HomePageHero from '../components/HomePageHero/HomePageHero'
import { Redirect } from 'react-router'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { requestPopularDest } from '../handlers/ApiHandler'
// import { popularCities } from '../Helper/Constants'
import { handleHomePageSearch } from '../Helper/Helper'

export const HomePage = () => {
  const [redirect, setRedirect] = useState(false)
  const { project, setProject } = useContext(ProjectContext)
  const [destres, setDesRes] = useState()
  const [popularCities, setPopularCities] = useState(['BCN', 'LON', 'MAD', 'MCO'])
  const [state, setState] = useState(
    {

      homePageBooking: [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}]],
      homePageContent: [],
      stay: {
        checkIn: '2020-11-15',
        checkOut: '2020-11-16'
      },
      occupancies: [
        {
          rooms: 1,
          adults: 1,
          children: 0
        }
      ],
      destination: {
        code: ''

      },
      reviews: [{
        type: 'TRIPADVISOR',
        minRate: 3,
        minReviewCount: 3
      }]

    }
  )

  const getHomePageHotels = (arr) => {
    console.log(arr)
    arr.map(destination1 => {
      console.log(destination1)
      handleHomePageSearch(destination1, state)
    })
  }
  useEffect(() => {
    // version 1 returns erros but the request to the api is done correctly
    getHomePageHotels(popularCities)

    // version 2 doesn't work, nothing happens
    const fetchDestinations = async () => {
      const res1 = await handleHomePageSearch('LON', state)
      console.log(res1)
      const res2 = await handleHomePageSearch('BCN', state)
      console.log(res2)
      const res3 = await handleHomePageSearch('IBZ', state)
      console.log(res3)
    }
    // setting to state after fetch
    // .then( destinationsResults => {
    //   setDesRes(destinationsResults)
    // })
  }, [])

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

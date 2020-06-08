import React, { useState, useEffect, useContext } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import SearchBar from '../SearchBar/SearchBar'
import Row from 'react-bootstrap/Row'
import { findCheapestHotel, handleHomePageSearch } from '../../Helper/Helper'
import { MyProvider, ProjectContext } from '../../providers/Provider'
import FirebaseContext from '../../providers/Firebase'
import { fetchPopularDestData } from '../../handlers/ApiHandler'
import { Redirect } from 'react-router'

const HomePageResults = (props) => {
  const [destresults, setDesResults] = useState()
  const [redirect, setRedirect] = useState(false)
  const [popularCities, setPopularCities] = useState([{ code: 'SAT' }, { code: 'BCN' }, { code: 'IBZ' }, { code: 'LIS' }, { code: 'PMI' }, { code: 'MAH' }, { code: 'MKS' }, { code: 'NAP' }, { code: 'TIV' }])
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)

  const [state, setState] = useState(
    {

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
  // console.log(destresults, 'desres')

  // const getHomePageHotels = (arr) => {
  //   console.log(arr)
  //   arr.map(destination1 => {
  //     console.log(destination1)
  //     handleHomePageSearch(destination1, state)
  //   })
  // }
  // useEffect(() => {
  //   // version 1 returns erros but the request to the api is done correctly
  //   // getHomePageHotels(popularCities)

  //   // version 2 doesn't work, nothing happens
  //   const fetchDestinations = async () => {
  //     const res1 = await handleHomePageSearch(popularCities[0], state)
  //     console.log(res1)
  //     const res2 = await handleHomePageSearch(popularCities[1], state)
  //     console.log(res2)
  //     const res3 = await handleHomePageSearch(popularCities[2], state)
  //     console.log(res3)
  //     const res4 = await handleHomePageSearch(popularCities[3], state)
  //     console.log(res4)
  //     const res5 = await handleHomePageSearch(popularCities[4], state)
  //     console.log(res5)
  //     const res6 = await handleHomePageSearch(popularCities[5], state)
  //     console.log(res6)
  //     const res7 = await handleHomePageSearch(popularCities[6], state)
  //     console.log(res7)
  //     const res8 = await handleHomePageSearch(popularCities[7], state)
  //     console.log(res8)
  //     const res9 = await handleHomePageSearch(popularCities[8], state)
  //     console.log(res9)
  //     return [res1, res2, res3, res4, res5, res6, res7, res8, res9]
  //   }
  //   fetchDestinations().then(destinationsResults => {
  //     setDesResults(destinationsResults)
  //   })
  // }, [])

  const handleClick = (des) => {
    setProject({ ...project, loading: true })
    fetchPopularDestData(des, db)
      .then((hotelsProject) => {
        setProject(
          { ...project, results: hotelsProject, loading: false }
        )
      }).then(() => setRedirect(true))
  }
  if (redirect) {
    return <Redirect exact push to='/searchresults' />
  }

  return (
    <div className='cardsDeck'>
      <p>Popular destinations</p>

      <CardDeck>
        {/* <Row style={{ marginTop: '20px', marginBottom: '20px' }}> */}
        {destresults && destresults.map((des, i) => {
          const cheap = findCheapestHotel(des)
          console.log(cheap, 'cheap')

          return (
            <Card className='cardHomePage' key={i} des={des} onClick={() => handleClick(des)}>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>{des[0].destinationName}</Card.Title>
                <Card.Text>
                  Hotels from {cheap.minRate}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          )
        })}
        {/* </Row> */}

      </CardDeck>
    </div>
  )
}

export default HomePageResults

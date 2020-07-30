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
import { Spinning } from '../Spinner'

const HomePageResults = (props) => {
  const [destresults, setDesResults] = useState()
  const [redirect, setRedirect] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [popularCities, setPopularCities] = useState([{ code: 'SAT' }, { code: 'BCN' }, { code: 'IBZ' }, { code: 'LIS' }, { code: 'PMI' }, { code: 'MAH' }, { code: 'MKS' }, { code: 'NAP' }, { code: 'TIV' }])
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)
  console.log(destresults, 'des results')

  // const checkIn = 'YYYY-MM-DD'
  // split by '-' to get an array of 3
  // const arr = checkIn.split('-')[2]
  // get days from arr
  // let days = arr[2]
  // cast into number
  // Number(days)
  // days = days + 1

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
  // getHomePageHotels(popularCities)
  //      const ALL_RESULTS = []

  //     for (let i = 0; i < popularCities.length; i++) {
  //       const res = await handleHomePageSearch(popularCities[i], state)
  //       ALL_RESULTS.push(res)

  //     }
  // useEffect(() => {
  //   const fetchDestinations = async () => {
  //     const res1 = await handleHomePageSearch(popularCities[0], state)
  //     const res2 = await handleHomePageSearch(popularCities[1], state)
  //     const res3 = await handleHomePageSearch(popularCities[2], state)
  //     const res4 = await handleHomePageSearch(popularCities[3], state)
  //     const res5 = await handleHomePageSearch(popularCities[4], state)
  //     const res6 = await handleHomePageSearch(popularCities[5], state)
  //     const res7 = await handleHomePageSearch(popularCities[6], state)
  //     const res8 = await handleHomePageSearch(popularCities[7], state)
  //     const res9 = await handleHomePageSearch(popularCities[8], state)

  //     return [res1, res2, res3, res4, res5, res6, res7, res8, res9]
  //   }
  //   fetchDestinations().then(destinationsResults => {
  //     setDesResults(destinationsResults)
  //   })
  // }, [])

  const handleClick = (des) => {
    setIsLoading(true)
    fetchPopularDestData(des, db)
      .then((hotelsProject) => {
        setProject(
          { ...project, results: hotelsProject }
        )
      }).then(() => setIsLoading(false)).then(() => setRedirect(true))
  }
  if (redirect) {
    return <Redirect exact push to='/searchresults' />
  }

  return (
    <div className='cardsDeck'>
      <p>Popular destinations</p>
      {isloading ? <Spinning />
        : <>
          <CardDeck>
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
              {destresults && destresults.map((des, i) => {
                const cheap = findCheapestHotel(des)

                if (i <= 2) {
                  return (
                    <Card className='cardHomePage' key={i} des={des} onClick={() => handleClick(des)}>
                      <Card.Img variant='top' src='https://source.unsplash.com/random' />
                      <Card.Body>
                        <Card.Title>{des[0].destinationName}</Card.Title>
                        <Card.Text>
                          Hotels from {cheap.minRate}¢
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className='text-muted'>Last updated 3 mins ago</small>
                      </Card.Footer>
                    </Card>
                  )
                }
              })}
            </Row>

          </CardDeck>
          <CardDeck>
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
              {destresults && destresults.map((des, i) => {
                const cheap = findCheapestHotel(des)

                if (i > 2 && i <= 5) {
                  return (
                    <Card className='cardHomePage' key={i} des={des} onClick={() => handleClick(des)}>
                      <Card.Img variant='top' src='https://source.unsplash.com/random' />
                      <Card.Body>
                        <Card.Title>{des[0].destinationName}</Card.Title>
                        <Card.Text>
                          Hotels from {cheap.minRate}¢
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className='text-muted'>Last updated 3 mins ago</small>
                      </Card.Footer>
                    </Card>
                  )
                }
              })}
            </Row>

          </CardDeck>
          <CardDeck>
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
              {destresults && destresults.map((des, i) => {
                const cheap = findCheapestHotel(des)

                if (i > 5) {
                  return (
                    <Card className='cardHomePage' key={i} des={des} onClick={() => handleClick(des)}>
                      <Card.Img variant='top' src='https://source.unsplash.com/random' />
                      <Card.Body>
                        <Card.Title>{des[0].destinationName}</Card.Title>
                        <Card.Text>
                          Hotels from {cheap.minRate}¢
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className='text-muted'>Last updated 3 mins ago</small>
                      </Card.Footer>
                    </Card>
                  )
                }
              })}
            </Row>

          </CardDeck>
          </>}
    </div>
  )
}

export default HomePageResults

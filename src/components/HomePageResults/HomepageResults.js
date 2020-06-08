import React, { useState, useEffect } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import SearchBar, { handleClickButton } from '../SearchBar/SearchBar'
import Row from 'react-bootstrap/Row'

import { findCheapestHotel, handleHomePageSearch } from '../../Helper/Helper'
import { requestPopularDest } from '../../handlers/ApiHandler'

const HomePageResults = (props) => {
  const [destresults, setDesResults] = useState()
  const [popularCities, setPopularCities] = useState([{ code: 'MAD' }, { code: 'BCN' }, { code: 'IBZ' }, { code: 'MCO' }])

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
  useEffect(() => {
    // version 1 returns erros but the request to the api is done correctly
    // getHomePageHotels(popularCities)

    // version 2 doesn't work, nothing happens
    // const fetchDestinations = async () => {
    //   const res1 = await handleHomePageSearch(popularCities[0], state)
    //   console.log(res1)
    //   const res2 = await handleHomePageSearch(popularCities[1], state)
    //   console.log(res2)
    //   const res3 = await handleHomePageSearch(popularCities[2], state)
    //   console.log(res3)
    //   const res4 = await handleHomePageSearch(popularCities[3], state)
    //   return [res1, res2, res3, res4]
    // }
    // fetchDestinations().then(destinationsResults => {
    //   // console.log(destinationsResults, 'api')
    //   setDesResults(destinationsResults)
    // })
  }, [])

  return (
    <div className='cardsDeck'>
      <p>Popular destinations</p>

      <CardDeck>
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
          {destresults && destresults.map((des, i) => {
            const cheap = findCheapestHotel(des)
            console.log(cheap, 'cheap')

            return (
              <Card className='cardHomePage' key={i} des={des}>
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
        </Row>
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Card className='cardHomePage'>
            <Card.Img variant='top' src='https://source.unsplash.com/random' />
            <Card.Body>
              <Card.Title>Split</Card.Title>
              <Card.Text>
                Hotels from 22$
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className='cardHomePage'>
            <Card.Img variant='top' src='https://source.unsplash.com/random' />
            <Card.Body>
              <Card.Title>Napoli</Card.Title>
              <Card.Text>
                Hotels from 22$
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className='cardHomePage'>
            <Card.Img variant='top' src='https://source.unsplash.com/random' />
            <Card.Body>
              <Card.Title>Roheds</Card.Title>
              <Card.Text>
                Hotels from 22$
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Row>
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Card className='cardHomePage'>
            <Card.Img variant='top' src='https://source.unsplash.com/random' />
            <Card.Body>
              <Card.Title>Corfu</Card.Title>
              <Card.Text>
                Hotels from 22$
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className='cardHomePage'>
            <Card.Img variant='top' src='https://source.unsplash.com/random' />
            <Card.Body>
              <Card.Title>Lisbon</Card.Title>
              <Card.Text>
                Hotels from 22$
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className='cardHomePage'>
            <Card.Img variant='top' src='https://source.unsplash.com/random' />
            <Card.Body>
              <Card.Title>Porto</Card.Title>
              <Card.Text>
                Hotels from 22$
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Row>
      </CardDeck>
    </div>
  )
}

export default HomePageResults

import React, { useState, useEffect } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import SearchBar from '../SearchBar/SearchBar'
import Row from 'react-bootstrap/Row'

const HomePageResults = () => {
  useEffect(() => {
    getEachCityResults()
    findCheapestHotel()
  }, [])

  const [state, setState] = useState(
    {
      // created special state for multi destinations and the reason the below is nested is because it is more than one destination
      homePageBooking: [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}]],
      homePageContent: [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}]],
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
        code: 'IBZ'

      },
      reviews: [{
        type: 'TRIPADVISOR',
        minRate: 3,
        minReviewCount: 3
      }]

    }
  )
  const popularCities = ['IBZ', 'BCN', 'LON', 'MAD', 'MCO']
  const apikey = 'kw7vpx3nefnq47b8dk6kehg4'
  const sec = 'nyM8qx6n8S'
  const D = new Date()
  const getSignature = () => {
    return (apikey + sec + Math.round(D.getTime() / 1000))
  }

  const createAPIRequest = (city) => {
    // will createRequestBody be able to fetch city here?
    const { destination } = city
    const createRequestBody = () => {
      const { occupancies, stay, reviews } = state

      return {
        stay,
        occupancies,
        destination,
        reviews
      }
    }
    window.fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
      {
        method: 'POST',
        headers: {
          'Api-Key': apikey,
          'X-Signature': getSignature(),
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip'
        },

        body: JSON.stringify(createRequestBody())
      }).then(res => res.json()).then(Response => {
      console.log(Response)
      const { hotels } = Response
      // can I do double destructing like below ? since the real results is actually hotels.hotels
      const { hotelsArray } = hotels.hotels

      console.log(hotelsArray)

      setState({ ...state, homePageBooking: hotelsArray })
    })
  }

  const getEachCityResults = () => {
    popularCities.map(city => {
      createAPIRequest(city)
      // fetchHotels(city) same idea as above /problem now both fetchhotels call and bookingAPI call have to be rewrriten here, can't re use the one in search bar and can't stick it in helper either
    })
  }
  const findCheapestHotel = () => {
    state.homePageBooking.foreach(des => {
      const res212 = des.reduce(function (prev, curr) {
        if (prev.minRate < curr.minRate) {
          return {
            rate: prev.minRate,
            city: prev.destinationName
          }
        }
      })
    })
  }
  // still need to capture this object for each city, is it better to make new state and push it there or in a varible as below is fine?
  const res2Map2Card = findCheapestHotel()

  return (
    <div className='cardsDeck'>
      <p>Popular destinations</p>

      <CardDeck>
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
          {res2Map2Card.map(city => {
            return (
              <Card className='cardHomePage' key={city} city={city}>
                <Card.Img variant='top' src='https://source.unsplash.com/random' />
                <Card.Body>
                  <Card.Title>{city.name}</Card.Title>
                  <Card.Text>
                    Hotels from {city.rate}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            )
          })}

          {/* <Card className='cardHomePage'>
            <Card.Img variant='top' src='https://source.unsplash.com/random' />
            <Card.Body>
              <Card.Title>Barcelona</Card.Title>
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
              <Card.Title>Ibiza</Card.Title>
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
          </Card> */}
        </Row>
      </CardDeck>
    </div>
  )
}

export default HomePageResults

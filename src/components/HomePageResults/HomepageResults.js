import React, { useState, useEffect } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import SearchBar, { handleClickButton } from '../SearchBar/SearchBar'
import Row from 'react-bootstrap/Row'
import { popularCities } from '../../Helper/Constants.js'

const HomePageResults = () => {
  // still need to capture this object for each city, is it better to make new state and push it there or in a varible as below is fine?

  return (
    <div className='cardsDeck'>
      <p>Popular destinations</p>

      <CardDeck>
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
          {/* {homePageContent.map(city => {
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
          })} */}

          <Card className='cardHomePage'>
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
          </Card>
        </Row>
      </CardDeck>
    </div>
  )
}

export default HomePageResults

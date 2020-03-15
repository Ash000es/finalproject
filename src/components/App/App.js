import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import '../App/App.css'
import Hotel from '../Hotel/Hotel'
import hotel from '../assets/hotel.png'
import label from '../assets/label.png'
import TA from '../assets/TA.png'
import SearchBar from '../SearchBar/SearchBar'

const hotelData = {
  name: 'Hotel Madrid',
  address: {
    street: '1 calle san jose ',
    distanceToCenter: '5',
    zipCode: '28002'
  },
  amenities: [{ icon: '' }, { title: 'Free wifi' }, { icon: '', title: 'Pool' }, { icon: '', title: 'Bar' }],
  image: hotel,
  label: label,
  TARating: TA,
  starRating: 3,
  price: 220,
  extrasimg: { breakfast: '', cake: '', redwine: '' },
  keyFact: ['Check-in: 3 PM. Check-out: 11 AM.', 'Photo ID and Credit Card required at Check-in']

}
const extras = {
  extrasPrice: { breakfast: 10, cake: 20, redwine: 20 },
  extrasImages: { breakfast: '', cake: '', redwine: '' },
  extrasSummary: { breakfast: 'Kings breakfast for served in bed', cake: ' Double chocolate cake with strawberries', redwine: 'A bottle of our berry sweet house red' },
  extrasDescription: { breakfast: ' Kings Breakfast is served in bed and includes: orange juice, pastry, posh eggs, a selection of cheeses, coffee', cake: 'We call it death by chocolate, two layers of dark and white chocolate infusion will send you to seven heavens', redwine: 'our !995 red merlot is famous for its sweet berry tasts, ideal to accompany chicken or fish dishes' }

}

function App () {
  /* 1.fetch function here for top destination for defualte display
  2.Handle card click function here which land them on the destination search results.
  3.create onClick funtion here which return the <hoteList/>

on click Inspire me button function to render <popUpSlider/> with the slider components
funtion to capture the sliders input and pass it to the recommmendation algorithm.
 the return results is another components called <inspiremeResults/>
 <inspiremeResults/> component= 3 row destination card with 3 cards on top

  */

  return (
    <>
      <MemoryRouter>
        <Navbar id='nav' expand='sm' bg='dark' variant='dark'>
          <Navbar.Brand>Website</Navbar.Brand>
          <Nav className='mr-auto'>
            <LinkContainer to='/home'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/users'>
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Container className='pt-3'>
          <Switch>
            <Route path='/home'>
              {/* <Home /> */}
            </Route>
            <Route path='/about'>
              {/* <About /> */}
            </Route>
            <Route path='/users'>
              {/* <Users /> */}
            </Route>
          </Switch>
          {/* <HotelPage /> */}

          <div>
            <img />
            <SearchBar />

          </div>
          <p>Popular destinations</p>

          <CardDeck>
            <Card>
              <Card.Img variant='top' src='holder.js/100px160' />
              <Card.Body>
                <Card.Title>Madrid</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src='holder.js/100px160' />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant='top' src='holder.js/100px160' />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
          {/* <Hotel hotel={hotelData} /> */}
        </Container>
      </MemoryRouter>
    </>

  )
}

export default App

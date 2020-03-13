import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import '../App/App.css'
import Hotel from '../Hotel/Hotel'
import hotel from '../assets/hotel.png'
import label from '../assets/label.png'
import TA from '../assets/TA.png'

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
  extrasprice: { breakfast: 10, cake: 20, redwine: 20 },
  extrasimg: { breakfast: '', cake: '', redwine: '' },
  keyFact: ['Check-in: 3 PM. Check-out: 11 AM.', 'Photo ID and Credit Card required at Check-in']

}

function App () {
  return (
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
        <Hotel hotel={hotelData} />
      </Container>
    </MemoryRouter>

  )
}

export default App

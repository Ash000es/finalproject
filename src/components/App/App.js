import React from 'react'
import { BrowserRouter as Router, MemoryRouter, Switch, Route, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import '../App/App.css'
import HotelPage from '../Hotelpage/HotelPage'
import FirebaseContext, { db } from '../Firebase/Firebase'
import AboutUs from '../AboutUs'
import { HomePage } from '../../Pages/HomePage'
import { HotelList2 } from '../HotelList/HoteListTest'
import ProjectProvider from '../Provider/Provider'
import MapPopUp from '../Map/MapPopUp'

export const extras = [
  { title: 'Kings Breakfast ', price: 10, image: 'https://source.unsplash.com/random', summary: 'Kings Breakfast is served in bed and includes: orange juice, pastry, posh eggs, a selection of cheeses, coffee' },

  { title: 'Double trouble', price: 20, image: 'https://source.unsplash.com/random', summary: 'We call it death by chocolate, two layers of dark and white chocolate infusion will send you to seven heavens' },
  { title: 'House Red', price: 30, image: 'https://source.unsplash.com/random', summary: 'our !995 red merlot is famous for its sweet berry tasts, ideal to accompany chicken or fish dishes' }

]

function App () {
  return (
    <ProjectProvider>
      <FirebaseContext.Provider value={db}>
        <MemoryRouter>
          <Navbar id='nav' expand='sm' bg='dark' variant='dark'>
            <Navbar.Brand>Website</Navbar.Brand>
            <Nav className='mr-auto'>
              <LinkContainer to='/home'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/hotelpage'>
                <Nav.Link>Things to do</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Travelessentials'>
                <Nav.Link>Travel Essentials</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
          <Container className='pt-3'>
            <Switch>

              <Route path='/about' exact component={AboutUs} />
              <Route path='/hotelpage' exact component={HotelPage} />
              <Route path='/hotelpage:code' component={HotelPage} />
              <Route path='/Travelessentials' exact component={MapPopUp} />
              <Route path='/searchresults' exact component={HotelList2} />
              <Route path='/' component={HomePage} />

            </Switch>

          </Container>
        </MemoryRouter>
      </FirebaseContext.Provider>
    </ProjectProvider>

  )
} export default App

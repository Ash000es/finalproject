
import React from 'react'
import { BrowserRouter as Router, MemoryRouter, Switch, Route, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css'
import HotelPage from '../components/Hotelpage/HotelPage'
import FirebaseContext, { db } from '../components/Firebase'
import AboutUs from '../components/AboutUs'
import { HomePage } from './HomePage'
import { HotelList2 } from '../components/assets/HoteListTest'
import ProjectProvider from '../Helper/Provider'
import MapPopUp from '../components/Map/MapPopUp'
import SelectPrice from '../components/SelectPrice'
import ReviewCart from '../components/PaymentCout/ReviewCart'
// import { SearchResultsPage } from '../Pages/SearchResults'
import HotelList from '../components/HotelList/HoteList'

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
              <LinkContainer to='/reviewcart'>
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
              <Route path='/hotelpage' exact component={HotelPage} />
              <Route path='/about' exact component={AboutUs} />
              <Route path='/reviewcart' component={ReviewCart} />
              <Route path='/Travelessentials' exact component={MapPopUp} />
              <Route path='/searchresults' exact component={HotelList} />
              <Route path='/' component={HomePage} />

            </Switch>

          </Container>
        </MemoryRouter>
      </FirebaseContext.Provider>
    </ProjectProvider>

  )
} export default App


import React, { useState, useContext } from 'react'
import firebase from 'firebase'
import { BrowserRouter as Router, MemoryRouter, Switch, Route, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css'
import HotelPage from './HotelPage'
import FirebaseContext, { db, onClickLogin, provider } from '../providers/Firebase'
import AboutUs from './AboutUs'
import { HomePage } from './HomePage'
import ProjectProvider, { ProjectContext } from '../providers/Provider'
import MapPopUp from '../components/Map/MapPopUp'
import getSteps from '../components/PaymentCout/Stepper'
import { HotelList } from './HoteList'
import { LoginButton } from '../components/LoginButton'
import ShoppingCart from '../components/ShoppingCard'
import SearchBar from '../components/SearchBar/SearchBar'

function App (props) {
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
              <LinkContainer to='#'>
                <Nav.Link><LoginButton /></Nav.Link>
              </LinkContainer>
              <LinkContainer to='#'>
                <Nav.Link>Cart Items</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
          <Container className='pt-3' fluid>
            <Switch>

              <Route path='/hotelpage' exact component={HotelPage} />
              <Route path='/about' exact component={SearchBar} />
              <Route path='/reviewcart' excat component={getSteps} />
              <Route path='/Travelessentials' exact component={ShoppingCart} />
              <Route path='/searchresults' exact component={HotelList} />
              <Route path='/' component={HomePage} />

            </Switch>

          </Container>
        </MemoryRouter>
      </FirebaseContext.Provider>
    </ProjectProvider>

  )
} export default App

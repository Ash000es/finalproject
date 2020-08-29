
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
import MapPopUp from '../components/MapPopUp'
import getSteps from '../components/PaymentCout/Stepper'
import { HotelList } from './HoteList'
import { LoginButton } from '../components/LoginButton'
import ShoppingCart from '../components/ShoppingCard'
import SearchBar from '../components/SearchBar'

function App (props) {
  return (
    <ProjectProvider>
      <FirebaseContext.Provider value={db}>
        <MemoryRouter>
          <Container className='pt-3' fixed>
            <Navbar collapseOnSelect bg='light' expand='md' className='navBar'>
              <Navbar.Brand href='#home'>Logo</Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                  <LinkContainer to='/home'>
                    <Nav.Link href='#features'><p>Home</p></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/reviewcart'>
                    <Nav.Link href='#pricing'><p>Things to do</p></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/Travelessentials'>
                    <Nav.Link href='#pricing'><p>Travel essential</p></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/about'>
                    <Nav.Link href='#pricing'><p>About</p></Nav.Link>
                  </LinkContainer>

                </Nav>
                <Nav>
                  <Nav.Link href='#deets'><LoginButton /></Nav.Link>
                  <Nav.Link eventKey={2} href='#memes'>
                    Cart items
                  </Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Navbar>

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

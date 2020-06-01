
import React from 'react'
import { BrowserRouter as Router, MemoryRouter, Switch, Route, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css'
import HotelPage from './HotelPage'
import FirebaseContext, { db } from '../providers/Firebase'
import AboutUs from './AboutUs'
import { HomePage } from './HomePage'
import ProjectProvider from '../providers/Provider'
import MapPopUp from '../components/Map/MapPopUp'
import getSteps from '../components/PaymentCout/Stepper'
import HotelList from './HoteList'
import { testing } from '../components/Test'

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
              {/* TODO: Move all components below into Pages/ folder */}
              <Route path='/hotelpage' exact component={HotelPage} />
              <Route path='/about' exact component={AboutUs} />
              <Route path='/reviewcart' excat component={getSteps} />
              {/* TODO: Do you really want to display just your Map component when going to this route?
              usually it's better to have a Page that contains your map component.
               */}

              <Route path='/searchresults' exact component={HotelList} />
              <Route path='/' component={HomePage} />

            </Switch>

          </Container>
        </MemoryRouter>
      </FirebaseContext.Provider>
    </ProjectProvider>

  )
} export default App

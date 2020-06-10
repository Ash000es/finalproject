
import React, { useState } from 'react'
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
import ProjectProvider from '../providers/Provider'
import MapPopUp from '../components/Map/MapPopUp'
import getSteps from '../components/PaymentCout/Stepper'
import { HotelList } from './HoteList'
import { testing } from '../components/Test'

function App () {
  const [errormessage, setErrorMessage] = useState('')
  const [authbuttonlabel, setAuthButtonLabel] = useState('Login')
  const [user, setUser] = useState(undefined)

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      handleUserSignedin(user)
    } else {
      // No user is signed in.
      handleUserNotSignedin()
    }
  })
  const handleUserSignedin = (user) => {
    setUser(user)
    setAuthButtonLabel('Logout')
    if (user.providerData.length) {
      console.log(user.providerData[0], 'userData')
    }
  }
  const handleUserNotSignedin = () => {
    setAuthButtonLabel('Login')
  }
  const logOut = () => {
    firebase.auth().signOut().then(function () {
    // Sign-out successful.
    }).catch(function (error) {
    // An error happened.
    })
  }
  const onClickAuth = () => {
    if (user) {
      return logOut()
    }
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken
      console.log(token, 'token')
      // The signed-in user info.
      const user = result.user
      console.log(user, 'user')
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential
      if (errorCode || errorMessage || email || credential) {
        setErrorMessage('An error has occurred ')
      }
    })
  }

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
                <Nav.Link onClick={onClickAuth}>{authbuttonlabel}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
          <Container className='pt-3'>
            <Switch>

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

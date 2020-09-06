
import React, { useState, useContext } from 'react'
import firebase from 'firebase'
import { BrowserRouter as Router, MemoryRouter, Switch, Route, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css'
import HotelPage from './HotelPage'
import FirebaseContext, { db, provider } from '../providers/Firebase'
import AboutUs from './AboutUs'
import { HomePage } from './HomePage'
import ProjectProvider, { ProjectContext } from '../providers/Provider'
import { HotelList } from './HoteList'

import ShoppingCart from '../components/ShoppingCard'
import ReviewCart from '../Pages/ReviewCart'
import ProfileContainer from '../components/MyProfile/ProfileContainer'
import Button from 'react-bootstrap/Button'

function App (props) {
  const [errormessage, setErrorMessage] = useState('')
  const [authbuttonlabel, setAuthButtonLabel] = useState('Login')
  const [user, setUser] = useState(undefined)

  const handleUserSignedin = (user) => {
    setUser(user)

    setAuthButtonLabel('Logout')
    if (user.providerData.length) {

    }
  }

  const handleUserNotSignedin = () => {
    setAuthButtonLabel('Login')
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      handleUserSignedin(user)
    } else {
      // No user is signed in.
      handleUserNotSignedin()
    }
  })

  const logOut = () => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      window.localStorage.removeItem('user')
      setUser(null)
    }).catch(function (error) {
      // An error happened.
      console.log(error)
    })
  }
  const onClickAuth = () => {
    if (user) {
      return logOut()
    }

    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken

      // The signed-in user info.
      const user = result.user

      handleUserSignedin(user)
      window.localStorage.setItem('user', JSON.stringify(user))
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
          <Container className='pt-3'>
            <Navbar collapseOnSelect bg='light' expand='md' className='navBar'>
              <Navbar.Brand href='#home'>Logo</Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                  <LinkContainer to='/home'>
                    <Nav.Link href='#features'><p>Home</p></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/'>
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
                  <Nav.Link href='#deets'><Button onClick={onClickAuth} variant='success'>{authbuttonlabel}</Button></Nav.Link>
                  <Nav.Link eventKey={2} href='#memes'>
                    {/* Cart items */}
                  </Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Navbar>

            <Switch>

              <Route path='/hotelpage' exact component={HotelPage} />
              <Route path='/about' exact component={AboutUs} />
              <Route path='/reviewcart' excat component={ReviewCart} />
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

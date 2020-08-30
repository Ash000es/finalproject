import React, { useState, useContext } from 'react'
import firebase from 'firebase'

import Button from 'react-bootstrap/Button'
import { ProjectContext } from '../providers/Provider'
import FirebaseContext, { db, onClickLogin, provider } from '../providers/Firebase'
import { BrowserRouter as Router, MemoryRouter, Switch, Route, Link } from 'react-router-dom'

export const LoginButton = (props) => {
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
    <>
      <Button onClick={onClickAuth} variant='success'>{authbuttonlabel}</Button>

    </>
  )
}

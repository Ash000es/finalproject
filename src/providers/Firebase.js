import firebase from 'firebase'
import 'firebase/firestore'
import React from 'react'

let keys
if (process.env.NODE_ENV === 'production') {
  keys = process.env
} else {
  keys = require('../keys.json')
}
const { REACT_APP_firebaseKey } = keys
const firebaseConfig = {
  apiKey: REACT_APP_firebaseKey,
  authDomain: 'hotels-62fad.firebaseapp.com',
  databaseURL: 'https://hotels-62fad.firebaseio.com',
  projectId: 'hotels-62fad',
  storageBucket: 'hotels-62fad.appspot.com',
  messagingSenderId: '644316071720',
  appId: '1:644316071720:web:0ad929033bc48022e8321d'
}
// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId
})
export const db = firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider()
export const FirebaseContext = React.createContext(db)
export default FirebaseContext

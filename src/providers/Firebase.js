import firebase from 'firebase'
import 'firebase/firestore'
import React from 'react'
const firebaseConfig = {
  apiKey: 'AIzaSyBuIr6mPdVxv2t1xWwUTvrJzxmUkRxsblE',
  authDomain: 'hotels-62fad.firebaseapp.com',
  databaseURL: 'https://hotels-62fad.firebaseio.com',
  projectId: 'hotels-62fad',
  storageBucket: 'hotels-62fad.appspot.com',
  messagingSenderId: '644316071720',
  appId: '1:644316071720:web:0ad929033bc48022e8321d'
}
// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider()
const FirebaseContext = React.createContext(db)
export default FirebaseContext

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId
})

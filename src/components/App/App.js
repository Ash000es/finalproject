import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import '../App/App.css'
import hotel from '../assets/hotel.png'
import label from '../assets/label.png'
import TA from '../assets/TA.png'
import SearchBar from '../SearchBar/SearchBar'
import HotelPage from '../Hotelpage/HotelPage'
import HomePageResults from '../HomePageResults/HomepageResults'
import HotelDetails from '../HotelsDetails'
import { hardHotelObject } from '../assets/HardCode'
import HotelList from '../HotelList/HoteList'
import { FiWifi } from 'react-icons/fa'
import FirebaseContext, { db } from '../Firebase/Firebase'
import BasicTextFields from '../PaymentCout/PaymentCout'
import HorizontalLabelPositionBelowStepper from '../PaymentCout/Stepper'
import ProfileContainer from '../MyProfile/ProfileContainer'
import MyFav from '../MyProfile/MyFav'
import PrevCancelled from '../MyProfile/PrevCancelled'
import UpComing from '../MyProfile/UpComing'
import MyBookings from '../MyProfile/MyBookings'
import ChangeDatesDiff from '../ChangeDates/OldvsNew'
import DateRange from '../DateRange/DateRange'
import Hero from '../Hero/Hero'
import CartDrawer from '../CartDrawer/CartDrawer'
import StarRating from '../StarRating/StarRating'
import ReviewCart from '../PaymentCout/ReviewCart'

export const extras = [
  { title: 'Kings Breakfast ', price: 10, image: 'https://source.unsplash.com/random', summary: 'Kings Breakfast is served in bed and includes: orange juice, pastry, posh eggs, a selection of cheeses, coffee' },

  { title: 'Double trouble', price: 20, image: 'https://source.unsplash.com/random', summary: 'We call it death by chocolate, two layers of dark and white chocolate infusion will send you to seven heavens' },
  { title: 'House Red', price: 30, image: 'https://source.unsplash.com/random', summary: 'our !995 red merlot is famous for its sweet berry tasts, ideal to accompany chicken or fish dishes' }

]

const mapStyles = {
  width: '100%',
  height: '100%'
}

function App () {
  return (

    <FirebaseContext.Provider value={db}>
      <MemoryRouter>
        <Navbar id='nav' expand='sm' bg='dark' variant='dark'>
          <Navbar.Brand>Website</Navbar.Brand>
          <Nav className='mr-auto'>
            <LinkContainer to='/home'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/users'>
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Myprofile'>
              <Nav.Link>My Profile</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Container className='pt-3'>
          <Switch>
            <Route path='/home' />
            <Route path='/about' />
            <Route path='/users' />
            <Route path='/Myprofile' />
          </Switch>

          <Hero />
          <SearchBar />
          <HotelList />
          {/* <HorizontalLabelPositionBelowStepper /> */}
          {/* <HotelPage /> */}
          {/* <MyBookings /> */}
          {/* <HorizontalLabelPositionBelowStepper /> */}
          {/* <ReviewCart /> */}
          {/* <CartDrawer /> */}

        </Container>
      </MemoryRouter>
    </FirebaseContext.Provider>

  )
} export default App

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
import FavCard from '../MyProfile/Favcard'
import LabelHip from '../CatLabels/LabelBold'
import MyFav from '../MyProfile/MyFav'
import PrevCancelled from '../MyProfile/PrevCancelled'
import UpComing from '../MyProfile/UpComing'
import MyBookings from '../MyProfile/MyBookings'
import ChangeDatesDiff from '../ChangeDates/OldvsNew'
import DateRange from '../DateRange/DateRange'
import Hero from '../Hero/Hero'
import CartDrawer from '../CartDrawer/CartDrawer'

export const extras = [
  { title: 'Kings Breakfast ', price: 10, image: 'https://source.unsplash.com/random', summary: 'Kings Breakfast is served in bed and includes: orange juice, pastry, posh eggs, a selection of cheeses, coffee' },

  { title: 'Double trouble', price: 20, image: 'https://source.unsplash.com/random', summary: 'We call it death by chocolate, two layers of dark and white chocolate infusion will send you to seven heavens' },
  { title: 'House Red', price: 30, image: 'https://source.unsplash.com/random', summary: 'our !995 red merlot is famous for its sweet berry tasts, ideal to accompany chicken or fish dishes' }

]
function App () {
  /* 1.fetch function here for top destination for defualte display
  2.Handle card click function here which land them on the destination search results.
  3.create onClick funtion here which return the <hoteList/>

on click Inspire me button function to render <popUpSlider/> with the slider components
funtion to capture the sliders input and pass it to the recommmendation algorithm.
 the return results is another components called <inspiremeResults/>
 <inspiremeResults/> component= 3 row destination card with 3 cards on top
createRequestBody(){
  return {
      stay: {
        checkIn: '2020-06-15',
        checkOut: '2020-06-16'
      },
      occupancies: [
        {
          rooms: 1,
          adults: 1,
          children: 0
        }
      ],
      destination: {
        code: 'MCO',
        Code: 'LON',
        Code: 'BCN'
      }
    }
}
componentDidMount (){
fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
        {
          method: 'POST',
          headers: {
            'Api-key': apikey,
            'X-Signature': getSignature(),
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip'
          },

          body: JSON.stringify(createRequestBody())
        }).then(res => res.json()).then(Response => {
        console.log(Response)
      })

}
  */

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
            <Route path='/home'>
              {/* <Home /> */}
            </Route>
            <Route path='/about'>
              {/* <About /> */}
            </Route>
            <Route path='/users'>
              {/* <Users /> */}
            </Route>
            <Route path='/Myprofile' />
          </Switch>
          {/* <HotelPage /> */}

          <div>
            <img />
            <SearchBar />
          </div>
          {/* <HotelList /> */}
          {/* <HomePageResults /> */}
          {/* <BasicTextFields /> */}
          {/* <HorizontalLabelPositionBelowStepper /> */}
          {/* <ProfileContainer /> */}
          {/* <FavCard /> */}
          {/* <MyFav /> */}
          {/* <PrevCancelled /> */}
          {/* <UpComing /> */}
          {/* <MyBookings /> */}
          {/* <ChangeDatesDiff /> */}
          {/* <Hero /> */}
          {/* <DateRange /> */}
          <CartDrawer />

        </Container>
      </MemoryRouter>
    </FirebaseContext.Provider>

  )
}

export default App

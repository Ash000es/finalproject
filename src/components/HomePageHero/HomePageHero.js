import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from '@material-ui/core/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import SearchBar from '../SearchBar/SearchBar'
import './Hero.css'
import cover from '../../assets/cover.svg'

const HomePageHero = () => {
  return (
    <>
      <div className='bigCon'>

        <img src={cover} alt='Card image' />

        {/* <SearchBar /> */}
      </div>
      <div className='splitCon'>
        <div className='con2'>
          {/* <Card className='bg-dark text-white '>
            <Card.Img src='https://source.unsplash.com/random' alt='Card image' style={{ height: '190px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card> */}
          <p>Where are you </p>
        </div>
        <div className='con3'>
          {/* <Card className='bg-dark text-white '>
            <Card.Img src='https://source.unsplash.com/random' alt='Card image' style={{ height: '190px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card> */}
          <p>I am here</p>
        </div>
      </div>
      {/* <div className='con1'>

      {/* </div> */}

    </>
  )
}; export default HomePageHero

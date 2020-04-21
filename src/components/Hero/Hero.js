import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from '@material-ui/core/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import './Hero.css'

const Hero = () => {
  return (
    <div className='bigCon'>
      <div className='con1'>
        <Card className='bg-dark text-white '>
          <Card.Img src='https://source.unsplash.com/random' alt='Card image' style={{ height: '400px' }} />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>

          </Card.ImgOverlay>
        </Card>
      </div>
      <div className='wrapDiv'>
        <div className='con2'>
          <Card className='bg-dark text-white '>
            <Card.Img src='https://source.unsplash.com/random' alt='Card image' style={{ height: '190px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className='con3'>
          <Card className='bg-dark text-white '>
            <Card.Img src='https://source.unsplash.com/random' alt='Card image' style={{ height: '190px' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>

    </div>
  )
}; export default Hero

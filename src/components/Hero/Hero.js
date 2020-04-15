import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from '@material-ui/core/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const Hero = () => {
  return (
    <>
      <Card className='bg-dark text-white' style={{ width: '50%', height: '50%' }}>
        <Card.Img src='https://source.unsplash.com/random' alt='Card image' />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant='primary'>Primary</Button>{' '}
        </Card.ImgOverlay>
      </Card>
      <div style={{ width: '50%', height: '25%' }}>
        <Card className='bg-dark text-white' style={{ width: '50%', height: '25%' }}>
          <Card.Img src='https://source.unsplash.com/random' alt='Card image' />
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
      <div style={{ width: '50%', height: '25%' }}>
        <Card className='bg-dark text-white' style={{ width: '50%', height: '25%' }}>
          <Card.Img src='https://source.unsplash.com/random' alt='Card image' />
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

    </>
  )
}; export default Hero

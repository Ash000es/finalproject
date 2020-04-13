import React from 'react'
import { hardHotelObject } from '../assets/HardCode'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const UpComing = () => {
  return (

    <>
      <h4>Up coming</h4>
      <Container>
        <Row>

          <Image src='https://source.unsplash.com/random' rounded style={{ width: '16.875rem', height: '16.875rem' }} />
          <Card style={{ width: '70%', height: '16.875rem' }}>
            <Card.Header style={{ 'text-transform': 'capitalize', fontWeight: 'bold' }}> Stay in {hardHotelObject.city.toLowerCase()}</Card.Header>
            <Card.Body>
              <Card.Title>{hardHotelObject.name}</Card.Title>
              <Card.Text>
                from {hardHotelObject.CheckinDate}- to {hardHotelObject.CheckoutDate}

              </Card.Text>
              <Button variant='primary'>Change dates</Button>
              <Button variant='danger'>Cancel</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}; export default UpComing

import React from 'react'
import { hardHotelObject } from './HardCode'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { ChangeDatePopup } from './PopUP'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const UpComing = () => {
  return (

    <>
      <h4>Up coming</h4>
      <Container style={{ 'border-color': 'red' }}>
        <Row nameClass='border border-primary'>

          <Image src='https://source.unsplash.com/random' style={{ width: '16.875rem', height: '16.875rem' }} className=' border-right-0 shadow-sm p-3 mb-5 bg-white rounded' />
          <Card style={{ width: '70%', height: '16.875rem' }} className='shadow-sm p-3 mb-5 bg-white rounded border-left-0'>
            <Card.Header style={{ 'text-transform': 'capitalize', fontWeight: 'bold' }}> Stay in {hardHotelObject.city.toLowerCase()}</Card.Header>
            <Card.Body>
              <Card.Title>{hardHotelObject.name}</Card.Title>
              <Card.Text>
                from {hardHotelObject.CheckinDate}- to {hardHotelObject.CheckoutDate}

              </Card.Text>
              <Card.Text>Confirmation number 1234</Card.Text>
              {/* the below popup is the change dates button on the webpage */}
              <ChangeDatePopup />

              <Button variant='danger'>Cancel booking</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}; export default UpComing

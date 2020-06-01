import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import { hardHotelObject } from '../../assets/HardCode'
import './ReviewCart.css'

const ReviewCart = () => {
  return (
    <>
      <h4>Your Cart</h4>
      <div className='bigCon'>
        <Row className='cardRow'>

          <Image src='https://picsum.photos/150' rounded style={{ width: '16.875rem', height: '16.875rem' }} />
          <Card style={{ width: '50%', height: '16.875rem' }}>
            <Card.Header style={{ 'text-transform': 'capitalize', fontWeight: 'bold' }}> Stay in {hardHotelObject.city.toLowerCase()}</Card.Header>
            <Card.Body>
              <Card.Title>{hardHotelObject.name}</Card.Title>
              <Card.Text>
                {hardHotelObject.rooms[0].name}

              </Card.Text>
              <Card.Text>
                {hardHotelObject.CheckinDate}
              </Card.Text>
              <Card.Text>
                {hardHotelObject.CheckoutDate}
              </Card.Text>
              <Button variant='primary'>Edit</Button>
              <Button variant='danger'>Remove</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className='totalAmountCard'>
          <Card>

            <Card.Body>
              <Card.Title>SubTotal:{hardHotelObject.rooms[0].rates[0].net}</Card.Title>
              <Card.Text>
                taxes and fees: {hardHotelObject.rooms[0].rates[0].taxes.taxes[0].amount}
              </Card.Text>
              <Card.Text>
                City Tax (to pay at the hotel){3}
              </Card.Text>
              <Card.Text>
                Total: {hardHotelObject.rooms[0].rates[0].net + hardHotelObject.rooms[0].rates[0].taxes.taxes[0].amount + 3}
              </Card.Text>
              <Button variant='primary'>Proceed to checkout</Button>

            </Card.Body>
          </Card>
        </Row>
      </div>
    </>
  )
}

export default ReviewCart

const styles = {
  card: {
    width: '20%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

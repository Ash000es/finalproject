import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { hardHotelObject } from '../assets/HardCode'

const ReviewCart = () => {
  return (
    <>
      <h4>Your Cart</h4>

      <Card style={styles.card}>
        <Card.Img src='https://picsum.photos/150' />
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
      <Card style={styles.card}>

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

        </Card.Body>
      </Card>
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

import React, { useState, useContext, useMemo } from 'react'
import { MyProvider, ProjectContext } from '../../providers/Provider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import { hardHotelObject } from '../../assets/HardCode'
import './ReviewCart.css'

const ReviewCart = () => {
  const { project, setProject } = useContext(ProjectContext)
  const hotelsCartArr = []
  const extrasCartArr = []
  const cartItemsToMap = project.cartItems

  const removeFromCart = (item, e) => {
    console.log(e, 'e')
    console.log(item, 'show')
  }

  return (
    <>
      <h4>Your Cart</h4>
      <div className='bigCon'>
        {cartItemsToMap && cartItemsToMap.map((item, i) => {
          if (item.rooms) {
            return (

              <div className='cardRow' item={item} key={i}>

                <Image src={item.image} rounded style={{ width: '16.875rem', height: '16.875rem' }} />
                <Card style={{ width: '50%', height: '16.875rem' }}>
                  <Card.Header style={{ 'text-transform': 'capitalize', fontWeight: 'bold' }}> Stay in {item.hotelName.toLowerCase()}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.roomType.toLowerCase()}</Card.Title>
                    <Card.Text>
                      {item.boardName.toLowerCase()} basis

                    </Card.Text>
                    <Card.Text>
                      {item.checkinDate}
                    </Card.Text>
                    <Card.Text>
                      {item.checkoutDate}
                    </Card.Text>
                    <Button variant='primary'>Edit</Button>
                    <Button onClick={(e) => removeFromCart(item, i, e)} variant='danger'>Remove</Button>
                  </Card.Body>
                </Card>

              </div>

            )
          } if (item.summary) {
            console.log(item, i, 'look here')
            return (
              <div className='cardRow' item={item} key={i}>

                <Image src={item.image} rounded style={{ width: '16.875rem', height: '16.875rem' }} />
                <Card style={{ width: '50%', height: '16.875rem' }}>
                  <Card.Header style={{ 'text-transform': 'capitalize', fontWeight: 'bold' }}> {item.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.extraSelectionNum}</Card.Title>
                    <Card.Text>
                      {item.summary}

                    </Card.Text>

                    <Button onClick={(e) => removeFromCart(item, i, e)} variant='danger'>Remove</Button>
                  </Card.Body>
                </Card>

              </div>

            )
          }
        })}

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

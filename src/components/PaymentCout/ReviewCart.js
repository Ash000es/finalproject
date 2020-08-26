import React, { useState, useContext, useMemo } from 'react'
import { MyProvider, ProjectContext } from '../../providers/Provider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'
import { hardHotelObject } from '../../assets/HardCode'
import './ReviewCart.css'
import '../Payment.css'

const ReviewCart = () => {
  const { project, setProject } = useContext(ProjectContext)
  const hotelsCartArr = []
  const extrasCartArr = []
  const cartItemsToMap = project.cartItems
  console.log(cartItemsToMap, 'here')
  const style = {
    borderColor: '#FF8B00',
    backgroundColor: '#FF8B00',
    color: 'white'
  }
  const removeFromCart = (item, e) => {
    console.log(e, 'e')
    console.log(item, 'show')
  }

  return (
    <div className='cartContainerDiv'>
      <div className='CartSelectionSummary'>
        {cartItemsToMap && cartItemsToMap.map((item, i) => {
          if (item.rooms) {
            return (
              <div className='hotelCheckoutCar'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={item.image} style={{ width: 100, height: 180 }} />
                  <Card.Body>
                    <Card.Title>{item.hotelName.content}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>{item.roomNumber}{item.roomType}</Card.Subtitle>

                    <Card.Text>
                      {item.checkinDate}-{item.checkoutDate}
                    </Card.Text>
                    <Card.Text>{item.mySellingRate}$</Card.Text>
                    <Button variant='outline-danger'>remove</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          }
        })}
        {cartItemsToMap && cartItemsToMap.map((item, i) => {
          if (item.summary) {
            console.log(item, i, 'look here')

            return (
              <div className='extraCheckoutCar'>
                <Card>
                  {/* src='holder.js/100px160' */}
                  <Card.Img variant='top' src={item.image} style={{ width: 100, height: 160 }} />
                  <Card.Body>
                    <Card.Title>{item.extraSelectionNum || item.num}{item.title}</Card.Title>
                    <Card.Text>
                      {item.summary}
                    </Card.Text>
                    <Card.Text>{item.ExtraPrice || item.price}$</Card.Text>

                  </Card.Body>
                </Card>
              </div>
            )
          }
        })}

      </div>

      <div className='cartPaymentSummary'>
        <Card style={{ width: '18rem' }}>
          <ListGroup variant='flush'>
            <ListGroup.Item>SubTotal $</ListGroup.Item>
            <ListGroup.Item>Taxes and fees $</ListGroup.Item>
            <ListGroup.Item>Total</ListGroup.Item>
            <ListGroup.Item>
              <Button size='medium' variant='contained' style={style}>
                Proceed to payment
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>

  )
}

export default ReviewCart

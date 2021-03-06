import React, { useState, useContext } from 'react'
import { MyProvider, ProjectContext } from '../providers/Provider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import './Payment.css'

const ReviewCart = () => {
  const { project, setProject } = useContext(ProjectContext)
  const cartItemsToMap = project.cartItems
  const style = {
    borderColor: '#FF8B00',
    backgroundColor: '#FF8B00',
    color: 'white'
  }
  const handleClickButton = (e, value) => {
    e.preventDefault()
    const filteredCartItems = cartItemsToMap.filter(cartitems => value !== cartitems)

    setProject({ ...project, cartItems: filteredCartItems })
  }

  return (
    <>
      <div style={{ margin: '1rem auto', textDecoration: 'underline', textAlign: 'center' }}><h5>Your cart items</h5></div>
      <div className='cartContainerDiv'>

        <div className='CartSelectionSummary'>
          {!cartItemsToMap.length
            ? <div><h2> Your cart is empty </h2></div>

            : cartItemsToMap.map((item, i) => {
              if (item.rooms) {
                return (
                  <div className='hotelCheckoutCar' key={i} item={item}>
                    <Card style={{ width: '18rem' }} key={i} item={item}>
                      <Card.Img variant='top' src={item.image} style={{ width: 100, height: 180 }} />
                      <Card.Body>
                        <Card.Title>{item.hotelName}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>{item.roomNumber}{item.roomType}</Card.Subtitle>

                        <Card.Text>
                          {item.checkinDate}-{item.checkoutDate}
                        </Card.Text>
                        <Card.Text>{item.mySellingRate}$</Card.Text>
                        <Button variant='outline-danger' key={i} value={item} onClick={(e) => handleClickButton(e, item)}>Remove</Button>
                      </Card.Body>
                    </Card>
                  </div>
                )
              }
            })}
          {cartItemsToMap && cartItemsToMap.map((item, i) => {
            if (item.summary) {
              return (
                <div className='extraCheckoutCar' key={i} item={item}>
                  <Card item={item} key={i}>

                    <Card.Img variant='top' src={item.image} style={{ width: 100, height: 160 }} />
                    <Card.Body>
                      <Card.Title>{item.extraSelectionNum || item.num}{item.title}</Card.Title>
                      <Card.Text>
                        {item.summary}
                      </Card.Text>
                      <Card.Text>{item.ExtraPrice || item.price}$</Card.Text>
                      <Button variant='outline-danger' key={i} item={item} onClick={(e) => handleClickButton(e, item)}>Remove</Button>

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
    </>

  )
}

export default ReviewCart

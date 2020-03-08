import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Hotel = ({ hotel }) => {
  return (

    <Card style={{ width: '18rem' }}>

      <Card.Body>
        <Card.Title>{hotel.name}</Card.Title>
        <Card.Text>
          <ul style={{ listStyleType: 'none' }}>{hotel.amenities.map(item =>
            <li key={item.title}>{item.icon}{item.title}</li>
          )}
          </ul>
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>

      </Card.Body>
      <Card.Img variant='bottom' src={hotel.image} />
    </Card>
  )
}
export default Hotel

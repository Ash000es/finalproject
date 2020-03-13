import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Hotel = ({ hotel }) => {
  return (

    <Card style={styles.card}>
      <Card.Img src={hotel.image} />
      <Card.Body>
        <Card.Title>{hotel.name}</Card.Title>
        <Card.Text>amenities:
          <ul style={{ listStyleType: 'none' }}>{hotel.amenities.map(item =>
            <li key={item.title}>{item.icon}{item.title}</li>
          )}
          </ul>
        </Card.Text>
        <p>{hotel.price + hotel.extrasprice.cake}</p>
        <Button variant='primary'>Book</Button>
        <p>{hotel.price}</p>
        <Button variant='primary'>Book</Button>
      </Card.Body>
    </Card>

  )
}
export default Hotel
const styles = {
  card: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

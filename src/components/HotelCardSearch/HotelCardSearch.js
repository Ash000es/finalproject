import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Hotel.css'
import Image from 'react-bootstrap/Image'

const HotelCardSearch = ({ hardHotelObject }) => {
  return (
    <div>
      <img id='hello' src='' />

      <Card>

        <Card.Body>
          <Card.Title></Card.Title>
          <p />

          <Card.Text>
            amenities:
            {/* <ul style={{ listStyleType: 'none' }}>{hotel.amenities.map(item => */}
            {/* <li key={item.title}>{item.icon}{item.title}</li> */}
            {/* )} */}
            {/* </ul> */}

          </Card.Text>
          {/* <img src={hotel.label} /> */}
          {/* <p>{hotel.price + hotel.extrasprice.cake}</p> */}
          {/* <Button variant='primary'>Book</Button> */}
          {/* <p>{hotel.price}</p> */}
          <Button variant='primary'>Book</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
export default HotelCardSearch
const styles = {
  card: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

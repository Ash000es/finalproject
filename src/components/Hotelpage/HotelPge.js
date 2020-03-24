import React from 'react'
const HotelPage = ({ hotel }) => {
  return (
    <div>
      <p>This hotel have spceial offer for you</p>
      <p>{hotel.name}</p>
      <p>{hotel.address}</p>
      <p>{hotel.price + hotel.extrasprice.cake}</p>
      <Button variant='primary'>Book</Button>
      <p>{hotel.price}</p>
      <Button variant='primary'>Book</Button>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://img.nextpax.com/core/79d/79da52fa/f137/47fa/b553/1ed13c47abfe/79da52fa-f137-47fa-b553-1ed13c47abfe.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://img.nextpax.com/core/973/9733284a/4b25/445e/b397/5cdd540abe42/9733284a-4b25-445e-b397-5cdd540abe42.jpg'
            alt='Secound slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://img.nextpax.com/core/e39/e3940799/3440/4c2b/aff1/cd61ff711bf5/e3940799-3440-4c2b-aff1-cd61ff711bf5.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>amenities:
        <ul style={{ listStyleType: 'none' }}>{hotel.amenities.map(item =>
          <li key={item.title}>{item.icon}{item.title}</li>
        )}
        </ul>
        <img src={hotel.TARating} alt='TA' />
      </div>
      <p>{hotel.KeyFact}</p>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Adults</th>
            <th>Included</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img /></td>
            <td>1</td>
            <td>Free Wifi</td>
            <td>220$<button>Book Now</button></td>
          </tr>

        </tbody>
        <tbody>
          <Extras />
        </tbody>
      </Table>
    </div>

  )
}

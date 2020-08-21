import React from 'react'
import Card from 'react-bootstrap/Card'
import IconButton from '@material-ui/core/IconButton'
import Button from 'react-bootstrap/Button'
import { hardHotelObject } from '../../assets/HardCode'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'

const variant = ''

const FavCard = () => {
  return (
    <>

      <Card className='bg-dark text-white' text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} bg={variant.toLowerCase()} style={{ width: '16.875rem', height: '16.875rem' }} thumbnail>
        <Card.Img src={hardHotelObject.images[1].path} alt='Card image' />
        <Card.ImgOverlay>
          <FavoriteRoundedIcon style={{ color: 'rgb(255,139,0)' }} />
          <Card.Title>{hardHotelObject.name}</Card.Title>

          <Card.Text>{hardHotelObject.city.toLowerCase()}</Card.Text><Card.Text>2.5 km to city centre </Card.Text>
          <Card.Text> {hardHotelObject.reviewScore} Stars review</Card.Text>

          <Button size='sm' style={{ background: 'rgb(255,139,0)' }}>View property</Button>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}
export default FavCard

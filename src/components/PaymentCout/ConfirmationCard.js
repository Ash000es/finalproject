import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { hardHotelObject } from '../assets/HardCode'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

export default function MediaCard () {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://source.unsplash.com/random'
          title='Hotel'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Hotel name:{hardHotelObject.name}
          </Typography>

          <Typography variant='body2' color='textSecondary' component='p'>
            Check-in date:{hardHotelObject.CheckinDate}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Check-out date:{hardHotelObject.CheckoutDate}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            SubTotal:{hardHotelObject.rooms[0].rates[0].net}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            taxes and fees: {hardHotelObject.rooms[0].rates[0].taxes.taxes[0].amount}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            City Tax (to pay at the hotel){3}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {hardHotelObject.rooms[0].rates[0].net + hardHotelObject.rooms[0].rates[0].taxes.taxes[0].amount + 3}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

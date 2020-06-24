
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { objectToMap } from '../Helper/Constants'

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    maxHeight: 650
  }
})

const ShoppingCard = () => {
  const classes = useStyles()

  return (
    <>
      {
        objectToMap.map((objy, i) => {
          return (

            <Card className={classes.root} key={i} objy={objy}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={objy.image}
                  title='Contemplative Reptile'
                  style={{ height: 450 }}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {objy.headline}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {objy.price}$ <p>get a package price</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Buy Now
                </Button>
                <Button size='small' color='primary'>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          )
        })
      }
    </>
  )
}
export default ShoppingCard

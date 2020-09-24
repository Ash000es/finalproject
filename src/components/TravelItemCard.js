import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from '@material-ui/core/Button'
import TravelItemsCaro from './TravelItemsCaro'
import { travelEssentialsObjects } from '../Helper/Constants'
import { makeStyles } from '@material-ui/core/styles'
import { truncateString } from '../Helper/Helper'

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    maxHeight: 650,
    margin: '1rem'
  },
  media: {
    maxHeight: 400
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-around'

  }

})

const TravelItemCard = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {travelEssentialsObjects.map((item, i) => {
        return (
          <Card item={item} key={i} className={classes.root}>
            <TravelItemsCaro images={item.threeImages} />
            <Card.Body>
              <Card.Title>{item.headline}</Card.Title>
              <Card.Text>
                {truncateString(item.descripText, 100)}
              </Card.Text>
              <Card.Text>{item.price}$ </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>

                <Button size='small' color='primary'>
                  Buy Now
                </Button>
                <Button size='small' color='primary'>
                  Add to Cart
                </Button>

              </div>
            </Card.Body>
          </Card>

        )
      })}
    </div>

  )
}

export default TravelItemCard

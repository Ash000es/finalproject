import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles'
import searchresultsHero from '../../assets/searchresultsHero.jpg'

const useStyles = makeStyles(theme => ({

  dealText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontWeight: '600',
    color: 'white'
  },
  imageSetting: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'contain',
    border: '2px solid red'
  },
  root: {
    width: '100%',
    maxHeight: '30rem',
    overflow: 'hidden',
    position: 'relative',
    margin: '4rem auto',
    borderRadius: '1.25rem',
    border: '2px solid blue'
    // backgroundSize: 'cover'

  }
}))

export const SearchResultsHero = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <img
          className={classes.imageSetting}
          src={searchresultsHero}
        />
      </div>
      <div className={classes.dealText}>
        <h1 style={{ color: 'white' }}>Deal of the day</h1>
        <p>
          Stay for 2 night and pay for 3 at the NH hotel Barcelona
        </p>
        <p>
          <Button size='sm' variant='primary'>Learn more</Button>
        </p>
      </div>

    </div>
  )
}

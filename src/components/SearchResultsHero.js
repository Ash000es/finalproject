import React from 'react'
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles'
import resort from '../assets/resort.jpg'

const useStyles = makeStyles((theme) => ({
  dealText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontWeight: '600',
    backgroundColor: 'rgb(54,49,43)',
    opacity: 0.7,
    color: theme.palette.primary.contrastText
  },
  imageSetting: {
    width: '100%',

    display: 'block',
    objectFit: 'cover'
  },
  root: {
    width: '100%',
    maxHeight: '30rem',
    overflow: 'hidden',
    position: 'relative',
    margin: '4rem auto',
    borderRadius: '1.25rem'
  }
}))

export const SearchResultsHero = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <img className={classes.imageSetting} src={resort} />
      </div>
      <div className={classes.dealText}>
        <h1 style={{ color: 'white' }}>Deal of the day</h1>
        <p>Stay for 2 night and pay for 3 at the NH hotel Barcelona</p>

      </div>
    </div>
  )
}

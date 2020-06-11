import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export const HotelsOnly = (props) => {
  console.log(props, 'props from hotel filter')
  const classes = useStyles
  const hotels = props.hotels
  const filteredHotels = props.tempfilteredhotels
  console.log(filteredHotels.length, 'true')

  const showHotelsOnly = () => {
    if (filteredHotels.length < 1) {
      const vcCodes = ['3LL', 'VILLA', 'APTH3', 'APTH5', 'RSORT']
      const res = hotels.filter(hotel => !vcCodes.includes(hotel.categoryCode))
      console.log(res, 'filtrest')

      props.onClick(res)
    } else {
      props.onClick(false)
    }
  }
  return (
    <div className={classes.root}>
      <Button onClick={showHotelsOnly} variant='outlined'>Hotels</Button>

    </div>
  )
}

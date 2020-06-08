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

  const showHotelsOnly = () => {
    const vcCodes = ['3LL', 'VILLA', 'APTH3', 'APTH5', 'RSORT']
    const res = hotels.filter(hotel => !vcCodes.includes(hotel.categoryCode))
    console.log(res, 'filtrest')
    // setstate({ results: res })
    props.onClick(res)
  }
  return (
    <div className={classes.root}>
      <Button onClick={showHotelsOnly} variant='outlined'>Hotels</Button>

    </div>
  )
}

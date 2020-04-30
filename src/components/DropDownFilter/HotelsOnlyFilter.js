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

export const hotelsOnly = () => {
  const classes = useStyles

  const showHotelsOnly = (results) => {
    const vcCodes = ['3LL', 'VILLA', 'APTH3', 'APTH5', 'RSORT']
    const res = results.filter(hotel => !vcCodes.includes(hotel.categoryCode))
    // console.log(res)  hotels
    // setstate({ results: res })
  }
  return (
    <div className={classes.root}>
      <Button onClick={showHotelsOnly} variant='outlined'>All Hotels</Button>

    </div>
  )
}

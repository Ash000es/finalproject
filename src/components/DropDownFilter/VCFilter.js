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

export const VacationRental = () => {
  const classes = useStyles

  const VCFilter = (results) => {
    const hotelcodes = ['4EST', '3EST', '5EST', '5LUX', 'RSORT']
    const res = results.filter(hotel => !hotelcodes.includes(hotel.categoryCode))
    // console.log(res)  Villas
    // setstate({ results: res })
  }
  return (
    <div className={classes.root}>
      <Button onClick={VCFilter} variant='outlined'>Vacation Rentals</Button>

    </div>
  )
}

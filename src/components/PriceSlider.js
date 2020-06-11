import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import HomePageResults from './HomePageResults/HomepageResults'

const useStyles = makeStyles({
  root: {
    width: 300
  }
})

function valuetext (value) {
  return `${value}$`
}

export const PriceSlider = (props) => {
  const classes = useStyles()
  const [value, setValue] = useState([0, 900])

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue)
  //   }
  console.log(props, ' I am props from slider')

  const updatePrice = (event, newValue) => {
    setValue(newValue)
    console.log(value, 'arr')
    const hotelsResults = props.hotelsresults
    const filteredHotels = props.tempfilteredhotels
    const min = value[0]
    const max = value[1]
    console.log(min, 'priceslider')
    console.log(max, 'priceslider')
    if (filteredHotels.length < 1) {
      const results = hotelsResults.filter(hotel => {
        const hotelMinRate = parseInt(hotel.minRate, 10)
        const hotelMaxRate = parseInt(hotel.maxRate, 10)

        if (hotelMinRate >= min && hotelMaxRate <= max) {
          return hotel
        }
      })
      return props.onChange(results)
    } else {
      return props.onChange(false)
    }
  }
  return (
    <div className={classes.root}>
      <Typography id='range-slider' gutterBottom>
        Price range
      </Typography>
      <Slider
        value={value}
        // onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider'
        getAriaValueText={valuetext}
        onChange={updatePrice}
        tempfilteredhotels={props.tempfilteredhotels}
        hotelsresults={props.hotelsresults}
      />
    </div>
  )
}

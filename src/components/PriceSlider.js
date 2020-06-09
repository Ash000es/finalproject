import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import HomePageResults from './HomePageResults/HomepageResults'
const DEFAULT_SLIDER_VALUE = [0, 1000]

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}))

function ValueLabelComponent (props) {
  const { children, open, value } = props

  return (
    <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  )
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
}

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider)

export default function PriceSlider (props) {
  const classes = useStyles()
  const [sliderPrice, setSliderPrice] = React.useState(DEFAULT_SLIDER_VALUE)
  // console.log(sliderPrice)
  const arr = props.hotelsresults

  const updatePrice = (arr) => {
    const min = sliderPrice[0]
    const max = sliderPrice[1]
    const results = arr.filter(hotel => {
      if (hotel.minRate >= min && hotel.maxRate <= max) {
        return hotel
      }
      props.onChange(results)
    })
  }

  return (
    <div className={classes.root}>

      <div className={classes.margin} />
      <Typography gutterBottom>Price Slider</Typography>

      <PrettoSlider onChange={(_, v) => setSliderPrice(v)} hotelsresults={props.hotelsresults} valueLabelDisplay='auto' getAriaLabel={(index: number) => 'Pretto Slider'} defaultValue={DEFAULT_SLIDER_VALUE} />
    </div>

  )
}

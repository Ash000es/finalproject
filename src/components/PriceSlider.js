import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import { debounce } from 'debounce'
import { colorStyles } from '../Helper/Constants'

export const DEFAULT_SLIDER_VALUE = [0, 1000]

const useStyles = makeStyles((theme) => ({
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
    color: colorStyles.orange,
    height: 8,
    marginBottom: -3
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -7,
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
  const [sliderPrice, setSliderPrice] = useState(DEFAULT_SLIDER_VALUE)

  const debouncedOnChange = debounce((v) => {
    props.onChange(v)
  }, 2000)
  const onChangeSlider = (v) => {
    debouncedOnChange(v)
  }

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom style={{ fontSize: 12 }}>
        Total price
      </Typography>

      <PrettoSlider
        max={1000}
        onChange={(_, v) => onChangeSlider(v)}
        tempfilteredhotels={props.tempfilteredhotels}
        hotelsresults={props.hotelsresults}
        valueLabelDisplay='auto'
        getAriaLabel={(index: number) => 'Pretto Slider'}
        defaultValue={DEFAULT_SLIDER_VALUE}
      />
    </div>
  )
}

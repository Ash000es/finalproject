import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import { hardHotelObject } from './assets/HardCode'
import { Link } from 'react-router-dom'
import { MyProvider, ProjectContext } from '../Helper/Provider'
import PriceSlider from './PriceSlider'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0)
  }
}))

export default function SelectPrice (props) {
  const classes = useStyles()
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(false)
  const [helperText, setHelperText] = React.useState('')
  const [showbookbutton, setShowBookButton] = React.useState(true)
  const [showprice, SetShowPrice] = React.useState('')
  const { project, setProject } = useContext(ProjectContext)

  const handleRadioChange = (event) => {
    console.log(event)
    setValue(event.target.value)
    setHelperText(' ')
    setError(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (value === 'best') {
      setHelperText('You got it!')
      setError(false)
    } else if (value === 'worst') {
      setHelperText('Good deal, conteniue  to next step')
      setError(true)
    } else {
      setHelperText('Please select an option.')
      setError(true)
    }
  }
  const hotels = project.results
  const lowestPrice = 30
  const showHotelPrice = () => {
    // take lowestPrice plus extra const, also remove should refresh amount.
    // likly we need context. HOW DOES HOTELPAGE KNOWs which hotel is this when it renders?
    SetShowPrice('30')
  }

  const handelButtonClick = () => {
    setShowBookButton(!showbookbutton)
    showHotelPrice()
  }
  return (
    <>

      <form onSubmit={handleSubmit}>
        <FormControl component='fieldset' error={error} className={classes.formControl}>
          <FormLabel component='legend' />
          <RadioGroup aria-label='quiz' name='quiz' value={value} onChange={handleRadioChange}>
            <FormControlLabel value='best' control={<Radio />} label='Room only' onClick={handelButtonClick} />

            <Link to='/hotelpage'>
              {showbookbutton
                ? <><p>{lowestPrice}</p>
                  <Button type='submit' variant='outlined' color='primary' className={classes.button}>
                    Book Now
                  </Button>
                  </> : null}
            </Link>
            <FormControlLabel value='worst' control={<Radio />} label='With extras' onClick={handelButtonClick} />

            <Link to='/hotelpage'>
              {!showbookbutton
                ? <><p>{() => showHotelPrice()} </p>
                  <Button type='submit' variant='outlined' color='primary' className={classes.button}>
                    Book Now
                  </Button>
                  </> : null}
            </Link>
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>

        </FormControl>
      </form>

    </>
  )
}

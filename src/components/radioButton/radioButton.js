import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import { hardHotelObject } from '../assets/HardCode'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0)
  }
}))

export default function ErrorRadios () {
  const classes = useStyles()
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(false)
  const [helperText, setHelperText] = React.useState('Choose wisely')

  const handleRadioChange = (event) => {
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
      setHelperText('Sorry, wrong answer!')
      setError(true)
    } else {
      setHelperText('Please select an option.')
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component='fieldset' error={error} className={classes.formControl}>
        <FormLabel component='legend' />
        <RadioGroup aria-label='quiz' name='quiz' value={value} onChange={handleRadioChange}>
          <FormControlLabel value='best' control={<Radio />} label='Room only' />
          <p>{hardHotelObject.rooms[0].rates[0].net}</p>
          <Button type='submit' variant='outlined' color='primary' className={classes.button}>
            Book Now
          </Button>
          <FormControlLabel value='worst' control={<Radio />} label='Roomxtras' />
          <p />
          <Button type='submit' variant='outlined' color='primary' className={classes.button}>
            Book Now
          </Button>
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>

      </FormControl>
    </form>
  )
}

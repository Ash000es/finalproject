import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { Redirect } from 'react-router'
const lowestPrice = 30
const extraPrice = 40
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0)
  }
}))

export default function SelectPrice (props) {
  const roomOnlyPrice = 30
  const roomPlusPrice = 40
  const classes = useStyles()

  const [value, setValue] = React.useState(true)
  // console.log(value, 'value')
  const [valuechecked, setValueChecked] = React.useState(true)
  // console.log(valuechecked, 'value is checked ?')
  const [value1, setValue1] = React.useState(false)
  // console.log(value1, 'value1')
  const [value1checked, setValue1Checked] = React.useState(false)
  // console.log(value1checked, 'value1 is checked ?')
  const [extraprice, setExtraPrice] = React.useState(false)
  const [showprice, SetShowPrice] = React.useState(roomOnlyPrice)
  const [showpriceplus, SetShowPricePlus] = React.useState(roomPlusPrice)

  const [helperText, setHelperText] = React.useState('')

  const { project, setProject } = useContext(ProjectContext)
  const [error, setError] = React.useState(false)
  const [redirect, setRedirect] = React.useState(false)

  const handleRadioChange = (event) => {
    console.log(event)

    setHelperText(' ')
    setError(false)
  }
  const showRoomOnlyPrice = (event) => {
    console.log(event.target.value, 'roomonly')
    setValue(!value)
    setValue1(!value1)
    setValueChecked(event.target.checked)
    setValue1Checked(!event.target.checked)
  }
  const showRoomPlusPrice = (event) => {
    console.log(event.target.value, 'plusprice')
    setValue(!value)
    setValue1(!value1)
    setValueChecked(!event.target.checked)
    setValue1Checked(event.target.checked)
  }
  const sendCurrentHotel = () => {
    setProject(
      { ...project, currentHotel: props.hotel }
    )
    props.done()
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
  if (redirect) {
    return <Redirect exact push to='/hotelpage' />
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component='fieldset' error={error} className={classes.formControl}>
        {/* value={value} onChange={handleRadioChange} */}
        <RadioGroup aria-label='quiz' name='quiz' value={value} value1={value1}>
          {value ? <div>
            <FormLabel component='legend'>Room only</FormLabel>
            <FormControlLabel value control={<Radio />} label={props.hotel.apiRooms[0].rates[0].mySellingRate} checked />

            <FormHelperText>{helperText}</FormHelperText>

            <Button type='submit' variant='outlined' color='primary' onClick={sendCurrentHotel} className={classes.button}>
              continue
            </Button>

            <FormLabel component='legend'>Room plus extra</FormLabel>
            <FormControlLabel checked={false} value1={value1} control={<Radio onChange={showRoomPlusPrice} />} label={showpriceplus} />
                   </div>

            : <div>
              <FormLabel component='legend'>Room only</FormLabel>
              <FormControlLabel checked={false} value={!value} control={<Radio onChange={showRoomOnlyPrice} />} label={props.hotel.apiRooms[0].rates[0].mySellingRate} />
              <FormLabel component='legend'>Room plus extra</FormLabel>

              <FormControlLabel value1={!value1} checked control={<Radio />} label={showpriceplus} />

              <FormHelperText>{helperText}</FormHelperText>
              <Button type='submit' variant='outlined' color='primary' className={classes.button}>
                continue
              </Button>
            </div>}

        </RadioGroup>

      </FormControl>
    </form>
  )
}

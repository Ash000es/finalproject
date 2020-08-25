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
import './HotelCardSearch.css'
const style = {
  borderColor: '#FF8B00',
  backgroundColor: '#FF8B00',
  color: 'white'
}
const useStyles = makeStyles((theme) => ({
  formControl: {

    margin: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    borderColor: '#FF8B00',
    backgroundColor: '#FF8B00'

  },
  root: {

    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center',
    // flexFlow: 'column wrap',
    // border: '1px solid black',
    position: 'relative',
    right: 0,

    left: '10%',

    maxWidth: '90%',
    height: '100%',
    // marginTop: 0,
    marginRight: 0
    // marginLeft: '10%',
    // paddingLeft: '20%'

  },
  insideRoot: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    top: 1
  },
  pStyling: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5
  }
}))

export default function SelectPrice (props) {
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

  const [showpriceplus, SetShowPricePlus] = React.useState(roomPlusPrice)
  const [helperText, setHelperText] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleRadioChange = (event) => {
    console.log(event)

    setHelperText(' ')
    setError(false)
  }
  const showRoomOnlyPrice = (event) => {
    // console.log(event.target.value, 'roomonly')
    setValue(!value)
    setValue1(!value1)
    setValueChecked(event.target.checked)
    setValue1Checked(!event.target.checked)
  }
  const showRoomPlusPrice = (event) => {
    // console.log(event.target.value, 'plusprice')
    setValue(!value)
    setValue1(!value1)
    setValueChecked(!event.target.checked)
    setValue1Checked(event.target.checked)
  }
  const sendCurrentHotel = () => {
    const currentHotel = props.hotel

    props.done(currentHotel)
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
  // if (redirect) {
  //   return <Redirect exact push to='/hotelpage' />
  // }

  return (

    <form onSubmit={handleSubmit} className={classes.root}>
      <FormControl component='fieldset' error={error} id={classes.insideRoot} className={classes.formControl}>
        {/* value={value} onChange={handleRadioChange} */}
        <RadioGroup aria-label='quiz' name='quiz' value={value} value1={value1}>
          {value ? <div>
            <FormLabel component='legend'><p className={classes.pStyling}>Rooms from</p></FormLabel>
            <FormControlLabel value control={<Radio style={{ color: '#FF8B00' }} />} label={props.hotel.apiRooms[0].rates[0].mySellingRate} checked />

            <FormHelperText>{helperText}</FormHelperText>

            <Button size='medium' variant='contained' onClick={sendCurrentHotel} style={style}>
              continue
            </Button>

            <FormLabel component='legend'><p className={classes.pStyling}>Extras from</p></FormLabel>
            <FormControlLabel checked={false} value1={value1} control={<Radio onChange={showRoomPlusPrice} style={{ color: '#FF8B00' }} />} label={showpriceplus} onClick={() => props.openExtras()} />
          </div>

            : <div>
              <FormLabel component='legend'><p className={classes.pStyling}>Rooms from</p></FormLabel>
              <FormControlLabel checked={false} value={!value} control={<Radio onChange={showRoomOnlyPrice} style={{ color: '#FF8B00' }} />} label={props.hotel.apiRooms[0].rates[0].mySellingRate} />
              <FormLabel component='legend'><p className={classes.pStyling}>Extras from</p></FormLabel>

              <FormControlLabel value1={!value1} checked control={<Radio style={{ color: '#FF8B00' }} />} label={showpriceplus} onClick={() => props.openExtras()} />

              <FormHelperText>{helperText}</FormHelperText>
              <Button size='medium' variant='contained' onClick={sendCurrentHotel} style={style}>
                continue
              </Button>
            </div>}

        </RadioGroup>

      </FormControl>
    </form>

  )
}

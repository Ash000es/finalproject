import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
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
    position: 'relative',
    right: 0,
    left: '10%',
    maxWidth: '90%',
    height: '100%',
    marginRight: 0
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
  const [valuechecked, setValueChecked] = React.useState(true)
  const [value1, setValue1] = React.useState(false)
  const [value1checked, setValue1Checked] = React.useState(false)
  const [showpriceplus, SetShowPricePlus] = React.useState(roomPlusPrice)

  const showRoomOnlyPrice = (event) => {
    setValue(!value)
    setValue1(!value1)
    setValueChecked(event.target.checked)
    setValue1Checked(!event.target.checked)
  }
  const showRoomPlusPrice = (event) => {
    setValue(!value)
    setValue1(!value1)
    setValueChecked(!event.target.checked)
    setValue1Checked(event.target.checked)
  }
  const sendCurrentHotel = (event) => {
    const currentHotel = props.hotel
    event.preventDefault()

    props.done(currentHotel)
  }

  return (
    <form className={classes.root}>
      <FormControl component='fieldset' id={classes.insideRoot} className={classes.formControl}>
        <RadioGroup aria-label='quiz' name='quiz' value={value} value1={value1}>
          {value ? (
            <div>
              <FormLabel component='legend'>
                <p className={classes.pStyling}>Rooms from</p>
              </FormLabel>
              <FormControlLabel
                value
                control={<Radio style={{ color: '#FF8B00' }} />}
                label={props.hotel.apiRooms[0].rates[0].mySellingRate}
                checked
              />

              <Button size='medium' variant='contained' onClick={(e) => sendCurrentHotel(e)} style={style}>
                continue
              </Button>

              <FormLabel component='legend'>
                <p className={classes.pStyling}>Extras from</p>
              </FormLabel>
              <FormControlLabel
                checked={false}
                value1={value1}
                control={<Radio onChange={showRoomPlusPrice} style={{ color: '#FF8B00' }} />}
                label={showpriceplus}
                onClick={() => props.openExtras()}
              />
            </div>
          ) : (
            <div>
              <FormLabel component='legend'>
                <p className={classes.pStyling}>Rooms from</p>
              </FormLabel>
              <FormControlLabel
                checked={false}
                value={!value}
                control={<Radio onChange={showRoomOnlyPrice} style={{ color: '#FF8B00' }} />}
                label={props.hotel.apiRooms[0].rates[0].mySellingRate}
              />
              <FormLabel component='legend'>
                <p className={classes.pStyling}>Extras from</p>
              </FormLabel>

              <FormControlLabel
                value1={!value1}
                checked
                control={<Radio style={{ color: '#FF8B00' }} />}
                label={showpriceplus}
                onClick={() => props.openExtras()}
              />

              <Button size='medium' variant='contained' onClick={(e) => sendCurrentHotel(e)} style={style}>
                continue
              </Button>
            </div>
          )}
        </RadioGroup>
      </FormControl>
    </form>
  )
}

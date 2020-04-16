import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

export default function MaterialUIPickers (props) {
  // The first commit of Material-UI
  const today = new Date()
  console.log('hello')
  const [selectedDate, setSelectedDate] = React.useState(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())
  // dateFormat(new Date(), 'm-d-Y h:i:s');new Date().format('m-d-Y h:i:s');
  console.log(today)

  const handleDateChange = date => {
    setSelectedDate(date)
    console.log(date)
    date = date.toLocaleDateString()
    console.log(date)
    const date1 = date.replace('/', '-').replace('/', '-')
    console.log(date1)
    const newDate = date1.split('-')
    console.log(newDate)
    const chars = newDate.reverse()
    console.log(chars)

    const strCopy = chars.join('-')
    props.onChange(strCopy)
    console.log(strCopy)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify='space-around'>

        <KeyboardDatePicker
          disableToolbar
          variant='inline'
          format='MM/dd/yyyy'
          margin='normal'
          id='date-picker-inline'
          label='Check Out Date'
          value={selectedDate}
          onChange={handleDateChange}
          disablePast
          autoOk
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />

      </Grid>

    </MuiPickersUtilsProvider>
  )
}

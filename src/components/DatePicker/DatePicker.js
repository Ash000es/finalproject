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
  console.log(props)
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-03-18T21:11:54'))
  // dateFormat(new Date(), 'm-d-Y h:i:s');new Date().format('m-d-Y h:i:s');

  const handleDateChange = e => {
    console.log(e)
    e = e.toLocaleDateString()
    console.log(e)
    // const NewDate = e.target.value;
      props.onChange(e);
      console.log(e)
      setSelectedDate(e)
  }
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify='space-around'>

        <KeyboardDatePicker
          disableToolbar
          variant='inline'
          format="yyyy/MM/dd"
          margin='normal'
          id='date-picker-inline'
          label='Check in Date'
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />

      </Grid>

    </MuiPickersUtilsProvider>
  )
}

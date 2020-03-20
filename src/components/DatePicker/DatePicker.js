import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

export default function MaterialUIPickers () {
  // The first commit of Material-UI
  console.log('hello')
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))
  // dateFormat(new Date(), 'm-d-Y h:i:s');new Date().format('m-d-Y h:i:s');

  const handleDateChange = date => {
    setSelectedDate(date)
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify='space-around'>

        <KeyboardDatePicker
        onChange={this.handleChange}
          disableToolbar
          variant='inline'
          format='MM-dd-yyyy'
          margin='normal'
          id='date-picker-inline'
          label='Date picker inline'
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

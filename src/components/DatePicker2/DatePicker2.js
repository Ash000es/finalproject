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
  console.log('hello')
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-03-18T21:11:54'))
  // dateFormat(new Date(), 'm-d-Y h:i:s');new Date().format('m-d-Y h:i:s');

  const handleDateChange = date => {
    setSelectedDate(date)
      console.log(date)
    date = date.toLocaleDateString()
  console.log(date)
 const newDate = date.split('-');
 console.log(newDate)
const chars = newDate.reverse();
console.log(chars);

const strCopy = chars.join('-');
    //  const NewDate2 = date.target.value;
    //  console.log(NewDate2)
      props.onChange(strCopy);
      console.log(strCopy)
     
  }
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify='space-around'>

        <KeyboardDatePicker
          disableToolbar
          variant='inline'
          format="MM-dd-yyyy"
          margin='normal'
          id='date-picker-inline'
          label='Check Out Date'
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

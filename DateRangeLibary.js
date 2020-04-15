import { MuiPickersUtilsProvider, DateRangePicker, DateRange } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import React from 'react'
function App () {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Root />
    </MuiPickersUtilsProvider>
  )
}

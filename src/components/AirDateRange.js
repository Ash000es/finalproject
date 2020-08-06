import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { convertDates } from '../Helper/Helper'

const DateRangePickerWrapper = (props) => {
  const [state, setState] = useState({
    startDate: null,
    endDate: null

  })
  const [focus, setFocus] = useState({ focusedInput: null })

  useEffect(() => {
    if ((state.startDate !== null) && (state.endDate !== null)) {
      console.log('true..')
      const final = convertDates(state.startDate, state.endDate)
      console.log(final, 'true..')
      props.onChange(final)
    }
  }, [state])

  return (
    <DateRangePicker
      startDate={state.startDate} // momentPropTypes.momentObj or null,
      startDateId='your_unique_start_date_id' // PropTypes.string.isRequired,
      endDate={state.endDate} // momentPropTypes.momentObj or null,
      endDateId='your_unique_end_date_id' // PropTypes.string.isRequired,
      onDatesChange={({ startDate, endDate }) => setState({ startDate, endDate })}
      focusedInput={focus.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={focusedInput => setFocus({ focusedInput })}
    />

  )
}

export default DateRangePickerWrapper

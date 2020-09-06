import 'react-dates/initialize'
import React, { useState, useEffect } from 'react'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { convertDates } from '../Helper/Helper'
import './airDate.css'

const DateRangePickerWrapper = (props) => {
  const screenWidth = props.width
  const [state, setState] = useState({
    startDate: null,
    endDate: null
  })
  const [focus, setFocus] = useState({ focusedInput: null })
  const block = screenWidth < 835
  const small = false
  const regular = true

  useEffect(() => {
    if (state.startDate !== null && state.endDate !== null) {
      const final = convertDates(state.startDate, state.endDate)
      props.onChange(final)
    }
  }, [state])

  return (
    <div>
      <DateRangePicker
        startDate={state.startDate}
        startDateId='your_unique_start_date_id'
        endDate={state.endDate}
        endDateId='your_unique_end_date_id'
        onDatesChange={({ startDate, endDate }) => setState({ startDate, endDate })}
        focusedInput={focus.focusedInput}
        onFocusChange={(focusedInput) => setFocus({ focusedInput })}
        block={block}
        small={small}
        regular={regular}
      />
    </div>
  )
}

export default DateRangePickerWrapper

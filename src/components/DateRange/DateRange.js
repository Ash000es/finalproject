import React from 'react'
import { DateRangePicker } from 'rsuite'
const { combine, allowedMaxDays, beforeToday } = DateRangePicker

function DateRange () {
  return (
    <DateRangePicker disabledDate={combine(allowedMaxDays(7), beforeToday())} />

  )
}; export default DateRange

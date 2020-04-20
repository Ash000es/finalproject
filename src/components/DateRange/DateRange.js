/* import React from 'react'
import { Button, DateRangePicker } from 'rsuite'
const styles = { width: 260, display: 'block', marginBottom: 10 }
const { combine, allowedMaxDays, beforeToday } = DateRangePicker

const DateRange = (props) => {
  const [selectedDate, setSelectedDate] = React.useState([])

  const handleDateChange = date => {
    setSelectedDate(date)
    console.log(date)
    const date1 = date.map(i => i.toLocaleDateString())

    console.log(date1)

    const date2 = date1.map(i => i.replace('/', '-').replace('/', '-'))
    console.log(date2)
    const date3 = date2.map(i => i.split('-'))
    console.log(date3)

    const date4 = date3.map(i => i.reverse())
    console.log(date4)

    const finalDate = date4.map(i => i.join('-'))
    props.onChange(finalDate)
    console.log(finalDate)
  }

  return (
    <div>
      <DateRangePicker
        toggleComponentClass={Button}
        size='md'
        placeholder='Start-date | End-date'
        style={styles}
        disabledDate={combine(allowedMaxDays(28), beforeToday())}
        onChange={handleDateChange}

      />
    </div>
  )
}; export default DateRange */

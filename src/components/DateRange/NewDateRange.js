import React, { useState } from 'react'

import DateRangePicker from '@wojtekmaj/react-daterange-picker'

const NewDateRange = (props) => {
  const [date, setDate] = useState([new Date(), new Date()])

  const handleDateChange = date => {
    console.log(date, 'orgin')
    setDate(date)
    //  console.log(date)
    const date1 = date.map(i => i.toLocaleDateString())

    //  console.log(date1, '1')

    const date2 = date1.map(i => i.replace('/', '-').replace('/', '-'))
    //  console.log(date2, '2')
    const date3 = date2.map(i => i.split('-'))
    //  console.log(date3, '3')

    const date4 = date3.map(i => i.reverse())
    //  console.log(date4, '4')

    const finalDate = date4.map(i => i.join('-'))
    props.onChange(finalDate)
    //  console.log(finalDate, 'fin')
  }
  const style = { height: 45, width: 250, color: 'red' }
  return (
    <div>
      <DateRangePicker
        onChange={handleDateChange}
        value={date}

        // tileClassName={style}
        className={style}
      />
    </div>
  )
}; export default NewDateRange

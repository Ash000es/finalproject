import React from 'react'

import DateRangePicker from '@wojtekmaj/react-daterange-picker'

class NewDateRange extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      date: [new Date(), new Date()]
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  // onChange = date => this.setState({ date })
   handleDateChange = date => {
     console.log(date)
     this.setState(date)
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
     this.props.onChange(finalDate)
     console.log(finalDate)
   }

   render () {
     return (
       <div>
         <DateRangePicker
           onChange={this.handleDateChange}
           value={this.state.date}
         />
       </div>
     )
   }
}; export default DateRangePicker

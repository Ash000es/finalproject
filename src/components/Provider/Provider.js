import React from 'react'
const MyContext = React.createContext()

export class MyProvider extends React.Component {
    state = {
      results: {},
      stay: {
        checkIn: '2020-11-15',
        checkOut: '2020-11-16'
      },
      occupancies: [
        {
          rooms: 1,
          adults: 1,
          children: 0,
          paxes: [{
            type: '',
            age: 0
          }]
        }
      ],
      destination: {
        code: 'IBZ'

      },
      hotels: []
    }

    render () {
      return (
        <MyContext.Provider value={{ state: this.state }}>
          {this.props.HotelList}
        </MyContext.Provider>

      )
    }
}

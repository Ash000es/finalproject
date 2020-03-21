import React from 'react'
import DatePicker from '../DatePicker/DatePicker'
import Sign from 'js-sha256'
import InputGroup from 'react-bootstrap/InputGroup'
import SearchField from '../SearchField/SearchField'
import OccSelector from '../OccSelector/OccSelector'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      stay: {
          checkIn: "2020-06-15",
          checkOut: "2020-06-16"
      },
      occupancies: [
          {
              rooms: 1,
              adults: 1,
              children: 0
          }
      ],
      destination: {
          code: "MCO"
      }
  }
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleOccChange = this.OccChange.bind(this)
    this.handleDateChange1 = this.handleDateChange.bind(this)
    this.handleDateChange2 = this.handleDateChange.bind(this)
    this.handleClickButton= this.handleClickButton.bind(this)

    
    handleClickButton= () => {
      const apikey = '2t97t6954dckh4ynkwknr78j'
      const sec = 'nDD9BFXf5a'
      const D = new Date()

      const getSignature = () => {
        return Sign(apikey + sec + Math.round(D.getTime() / 1000))
      }

      const createRequestBody= () => {
        return 
        {
          stay: {
              {this.props.checkIn}
              {this.props.checkOut}
          },
          occupancies: [
              {
                  {this.props.occupancies.adults}
              }
          ],
          destination: {
              {this.props.destination.code}
          }
      }

      }
      
      console.log(getSignature())
      fetch(' https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
      {
        method:'POST',
        headers: {
          'Api-key': apikey,
          'X-Signature': getSignature(),
          Accept: 'application/json',
          'Accept-Encoding': 'gzip'
        },
        body: createRequestBody()
    })
    }

    handleOccChange (event) {
      this.setState({ occupancies.adults: event.target.value })
    }
    handleLocationChange (event) {
      this.setState({ destination.code: event.target.value })
    }
    handleDateChange1 (event) {
      this.setState({ stay.checkIn: event.target.value })
    }
    handleDateChange2 (event) {
      this.setState({ stay.checkOut: event.target.value })
    }
    
    render () {
      return (
        <>
          <div className='SearchBar-fields'>

            <SearchField onChange={this.handleLocationChange} />
            <DatePicker onChange={this.handleDateChange1}/>
            <DatePicker onChange={this.handleDateChange2 }/>
            <OccSelector onChange={this.handleOccChange}/>
          </div>
          <div className='SearchBar-submit'>
            <button onClick={this.handleClickButton}>Search</button>
            <button>Inspire me</button>
          </div>
        </>
      )
    }
}

export default SearchBar

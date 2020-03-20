import React from 'react'
import DatePicker from '../DatePicker/DatePicker'
import Sign from 'js-sha256'
import InputGroup from 'react-bootstrap/InputGroup'
import SearchField from '../SearchField/SearchField'
import SearchButton from '../SearchButton/SearchButton'
import OccSelector from '../OccSelector/OccSelector'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      date: {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-17",
      location: {
        "code": "BCN"
    },
      occ: [
        {
            "rooms": 1,
            "adults": 2,
            "children": 0
        }
    ],
      
    }
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleOccChange = this.OccChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleClickButton= this.handleClickButton.bind(this)

    
    handleClickButton= () => {
      const apikey = '2t97t6954dckh4ynkwknr78j'
      const sec = 'nDD9BFXf5a'
      const D = new Date()

      const getSignature = () => {
        return Sign(apikey + sec + Math.round(D.getTime() / 1000))
      }
      // should click button wrap and change set state?
      console.log(getSignature())
      fetch(' https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels/availabilityRQ/stay=2/@checkIn="2020-06-15"/@checkOut="2020-06-17"//occupancies/occupancy=2/@adults=2/@rooms=1/fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=false',
      {
        method:'POST',
        headers: {
          'Api-key': apikey,
          'X-Signature': getSignature(),
          Accept: 'application/json',
          'Accept-Encoding': 'gzip'
        },
        body: {"stay": {
          "checkIn": "2020-06-15",
          "checkOut": "2020-06-17"
      },
    }
    })
    }
    handleOccChange (event) {
      this.setState({ occ: event.target.value })
    }
    handleLocationChange (event) {
      this.setState({ location: event.target.value })
    }
    handleDateChange (event) {
      this.setState({ date: event.target.value })
    }
    
    render () {
      return (
        <>
          <div className='SearchBar-fields'>

            <SearchField onChange={this.handleLocationChange} />
            <DatePicker onChange={this.DateChange}/>
            <OccSelector onChange={this.handleOccChange}/>
          </div>
          <div className='SearchBar-submit'>
            <SearchButton onClick={this.handleClickButton}/>
            <button>Inspire me</button>
          </div>
        </>
      )
    }
}

export default SearchBar

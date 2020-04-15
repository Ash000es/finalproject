import React from 'react'
import DatePicker from '../DatePicker/DatePicker'
import Sign from 'js-sha256'
import InputGroup from 'react-bootstrap/InputGroup'
import SearchField from '../SearchField/SearchField'
import OccSelector from '../OccSelector/OccSelector'
import OccSelector2 from '../OccSelector2/OccSelector2'
import DatePicker2 from '../DatePicker2/DatePicker2'
import FirebaseContext from '../Firebase/Firebase'
import BasicDateRangePicker from '../DateRange/DateRange'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      results: [],
      stay: {
        checkIn: '2020-06-15',
        checkOut: '2020-06-16'
      },
      occupancies: [
        {
          rooms: 1,
          adults: 1,
          children: 0,
          paxes: [{
            type: 'CH',
            age: 2
          }]
        }
      ],
      destination: {
        code: 'MCO'

      }
    }

    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleOccChange = this.handleOccChange.bind(this)
    this.handleOccChange2 = this.handleOccChange2.bind(this)
    this.handleDateChange1 = this.handleDateChange1.bind(this)
    this.handleDateChange2 = this.handleDateChange2.bind(this)
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  componentDidMount () {
    console.log('yayyo')
    const db = this.context
    const destinationsRef = db.collection('destinations').doc('B')
    destinationsRef.get().then(doc => console.log(doc.data()))
  }

    handleClickButton= () => {
      const apikey = '2t97t6954dckh4ynkwknr78j'
      const sec = 'nDD9BFXf5a'
      const D = new Date()

      const getSignature = () => {
        return Sign(apikey + sec + Math.round(D.getTime() / 1000))
      }

      const createRequestBody = () => {
        const { occupancies, destination, stay } = this.state
        return {
          stay,
          occupancies,
          destination
        }
      }

      console.log(getSignature())
      console.log(JSON.stringify(createRequestBody()))
      window.fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
        {
          method: 'POST',
          headers: {
            'Api-key': apikey,
            'X-Signature': getSignature(),
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip'
          },

          body: JSON.stringify(createRequestBody())
        }).then(res => res.json()).then(Response => {
        console.log(Response)
        const { hotels } = Response

        console.log(hotels)

        this.setState({ results: [hotels] })
      })
    }

    handleOccChange (occ) {
      const { rooms, adults, children } = occ
      this.setState({ occupancies: [{ rooms, adults, children }] })
    }

    handleOccChange2 (occ2) {
      const { rooms, adults, children } = occ2
      this.setState({ occupancies: [{ rooms, adults, children }] })
    }

    handleLocationChange (code) {
      const { destination } = this.state
      this.setState({ destination: { ...destination, code } })
    }

    handleDateChange1 (NewDate1) {
      const { stay } = this.state
      this.setState({ stay: { ...stay, checkIn: NewDate1 } })
    }

    handleDateChange2 (NewDate2) {
      const { stay } = this.state
      this.setState({ stay: { ...stay, checkOut: NewDate2 } })
    }

    render () {
      return (
        <>
          <div className='SearchBar-fields'>

            <SearchField onChange={this.handleLocationChange} />
            <BasicDateRangePicker />
            {/* <DatePicker onChange={this.handleDateChange1} /> */}
            {/* <DatePicker2 onChange={this.handleDateChange2} /> */}
            <OccSelector onChange={this.handleOccChange} />
            <OccSelector2 onChange={this.handleOccChange2} />
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
SearchBar.contextType = FirebaseContext

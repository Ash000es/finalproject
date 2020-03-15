import React from 'react'
import DatePicker from '../DatePicker/DatePicker'
import Sign from 'js-sha256'
import InputGroup from 'react-bootstrap/InputGroup'
import SearchField from '../SearchField/SearchField'

class SearchBar extends React.Component {
    state = { }
    handleClickButton= () => {
      const apikey = '2t97t6954dckh4ynkwknr78j'
      const sec = 'nDD9BFXf5a'
      const D = new Date()

      const getSignature = () => {
        return Sign(apikey + sec + 1584307101)
      }
      console.log(getSignature())
      fetch(' https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=false',
        {
          headers: {
            'Api-key': apikey,
            'X-Signature': getSignature(),
            Accept: 'application/json',
            'Accept-Encoding': 'gzip'
          }
        })
    }

    render () {
      return (
        <>
          <div className='SearchBar-fields'>
            <input placeholder='Where?' />
            <SearchField />
            {/* <DatePicker /> */}
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

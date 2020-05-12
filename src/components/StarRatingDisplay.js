import React from 'react'
import { hardHotelObject } from './assets/HardCode'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import DeckIcon from '@material-ui/icons/Deck'
import StarRateIcon from '@material-ui/icons/StarRate'
import { stars3, stars4, stars5 } from './Constants/Constants.js'

class StarRatingDisplay extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stars: '3 STARS',
      starImage: []

    }
    this.displayStarCount = this.displayStarCount.bind(this)
  }

  componentWillMount () {
    this.displayStarCount()
  }

  displayStarCount () {
    if (hardHotelObject.categoryName === '3 STARS') {
      this.setState({ stars: '3 Stars hotel', starImage: stars3 })
    } else if (hardHotelObject.categoryName === '4 STARS') {
      this.setState({ stars: '4 Stars hotel', starImage: stars4 })
    } else if (hardHotelObject.categoryName === '5 STARS') {
      this.setState({ stars: '5 Stars hotel', starImage: stars5 })
    } else {
      return null
    }
  }

  render () {
    return (
      <div>

        <h4>{this.state.stars}</h4>
        <br />
        {this.state.starImage}
      </div>
    )
  }
}

export default StarRatingDisplay

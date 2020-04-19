import React from 'react'
import { hardHotelObject } from '../assets/HardCode'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import DeckIcon from '@material-ui/icons/Deck'

const starImageArr = [<RestaurantIcon />, <RoomServiceIcon />, <DeckIcon />]
class StarRating extends React.Component {
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
      this.setState({ stars: '3 Stars', starImage: starImageArr[0] })
    } else if (hardHotelObject.categoryName === '4 STARS') {
      this.setState({ stars: '4 Stars', starImage: starImageArr[1] })
    } else if (hardHotelObject.categoryName === '5 STARS') {
      this.setState({ stars: '5 Stars', starImage: starImageArr[2] })
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

export default StarRating

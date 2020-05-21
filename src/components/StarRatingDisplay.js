import React, { useEffect, useState } from 'react'

import RestaurantIcon from '@material-ui/icons/Restaurant'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import DeckIcon from '@material-ui/icons/Deck'
import StarRateIcon from '@material-ui/icons/StarRate'
import { stars3, stars4, stars5 } from '../Helper/Constants.js'

const StarRatingDisplay = (props) => {
  const [state, setState] = useState({
    stars: '',
    starImage: []

  })

  useEffect(() => {
    displayStarCount()
  }, [])

  const displayStarCount = () => {
    if (props.currentSelection.categoryName === '3 STARS') {
      setState({ stars: '3 Stars hotel', starImage: stars3 })
    } else if (props.currentSelection.categoryName === '4 STARS') {
      setState({ stars: '4 Stars hotel', starImage: stars4 })
    } else if (props.currentSelection.categoryName === '5 STARS') {
      setState({ stars: '5 Stars hotel', starImage: stars5 })
    } else {
      return null
    }
  }

  return (
    <div>

      <h4>{state.stars}</h4>
      <br />
      {state.starImage}
    </div>
  )
}

export default StarRatingDisplay

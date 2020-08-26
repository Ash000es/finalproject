import React, { useEffect } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

export const StarRating = withStyles({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(Rating)

export default function StarRatings (props) {
  let starsRatings
  const displayStarCount = (props) => {
    if (props.currentSelection.categoryName === '3 STARS') {
      starsRatings = { starsName: '3 Stars hotel', starNumber: 3 }
      return starsRatings
    } if (props.currentSelection.categoryName === '4 STARS') {
      starsRatings = { starsName: '4 Stars hotel', starNumber: 4 }
      return starsRatings
    } else if (props.currentSelection.categoryName === '5 STARS') {
      starsRatings = { starsName: '5 Stars hotel', starNumber: 5 }
      return starsRatings
    } else {
      starsRatings = { starsName: 'Not Rated', starNumber: 0 }
      return starsRatings
    }
  }

  displayStarCount(props)

  return (
    <div>
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <Typography component='legend'>{starsRatings.starsName}</Typography>
        <Rating
          name='customized-empty'
          defaultValue={starsRatings.starNumber}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize='inherit' />}
        />
      </Box>
    </div>
  )
}

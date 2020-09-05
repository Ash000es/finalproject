
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Rating } from '@material-ui/lab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import '../Pages/HotelPage.css'

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(Rating)

export default function CustomizedRatings (props) {
  return (
    <div className='RatingOuterDiv'>
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <Typography component='legend'>Tripadvisor reviews</Typography>

        <StyledRating
          name='customized-color'
          defaultValue={props.TAReviews.rate}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize='inherit' />}
        />
        <div className='RatingTextDiv'><p className='spaceMe'>{props.TAReviews.reviewCount}<a href='' target=''> reviews</a></p></div>
      </Box>

    </div>
  )
}

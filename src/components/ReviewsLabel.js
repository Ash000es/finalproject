import Badge from 'react-bootstrap/Badge'
import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'

const color = '#FF8B00'
const style = {
  fontSize: 16,
  color: '#FF8B00',
  fontWeight: '600'
}
const ReviewsLabel = (props) => {
  console.log(props, 'props here ')
  return (
    <>

      <p style={style}>{props.label}</p><p>based on {props.reviewsObj.reviewCount}{' reviews'}</p>
      {/* <p>{props.reviewsObj.rate}</p> */}

    </>
  )
}; export default ReviewsLabel

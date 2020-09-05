import React from 'react'

const style = {
  fontSize: 16,
  color: '#FF8B00',
  fontWeight: '600'
}
const ReviewsLabel = (props) => {
  return (
    <>
      <p style={style}>{props.label}</p>
      <p>
        based on {props.reviewsObj.reviewCount}
        {' reviews'}
      </p>
    </>
  )
}
export default ReviewsLabel

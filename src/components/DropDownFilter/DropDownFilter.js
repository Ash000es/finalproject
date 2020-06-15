import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
// import { sortbyPrice } from '../../Helper/Helper'

export const DropDownFilter = (props) => {
  const hotelsResults = props.hotelsResults
  const tempHotels = props.tempHotels
  console.log(props, 'props')

  const sortbyPrice = (e) => {
    console.log(e.target.value, 'checking the argument ')
    const valueToSort = tempHotels.length >= 1 ? tempHotels : hotelsResults
    const res = valueToSort.sort(function (a, b) {
      console.log('sorting price..')
      return parseFloat(a.minRate) - parseFloat(b.minRate)
    })
    // console.log(res, 'iam res')
    props.onClick(res)
  }

  const sortByReview = (e) => {
    const valueToSort = tempHotels.length >= 1 ? tempHotels : hotelsResults
    const res = valueToSort.sort(function (a, b) {
      console.log('sorting review..')
      return parseFloat(b.reviews[0].rate) - parseFloat(a.reviews[0].rate) || parseFloat(b.reviews[0].reviewCount) - parseFloat(a.reviews[0].reviewCount)
    })

    props.onClick(res)
  }
  return (
    <DropdownButton id='dropdown-item-button' title='Dropdown button'>
      <Dropdown.Item onClick={sortbyPrice} value='Sortby Price' as='button'>Sort by Price</Dropdown.Item>
      <Dropdown.Item onClick={sortByReview} value='Sortby review' as='button'>Sort by Review</Dropdown.Item>
      <Dropdown.Item value='Sortby somethingelse' as='button'>Something else</Dropdown.Item>
    </DropdownButton>
  )
}

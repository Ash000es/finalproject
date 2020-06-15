import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
// import { sortbyPrice } from '../../Helper/Helper'

export const DropDownFilter = (props) => {
  const hotelsResults = props.HotelsResults
  console.log(hotelsResults, 'props')
  const sortbyPrice = (e) => {
    console.log(e, 'checking the argument ')
    const res = hotelsResults.sort(function (a, b) {
      console.log('sorting ..')
      return parseFloat(a.minRate) - parseFloat(b.minRate)
    })
    console.log(res, 'iam res')
    props.onClick(res)
  }

  const sortByReview = (e) => {
    const res = hotelsResults.sort(function (a, b) {
      return parseFloat(b.reviews[0].rate) - parseFloat(a.reviews[0].rate) || parseFloat(b.reviews[0].reviewCount) - parseFloat(a.reviews[0].reviewCount)
    })

    props.onClick(res)
  }
  return (
    <DropdownButton id='dropdown-item-button' title='Dropdown button'>
      <Dropdown.Item onClick={sortbyPrice} as='button'>Sort by Price</Dropdown.Item>
      <Dropdown.Item onClick={sortByReview} as='button'>Sort by Review</Dropdown.Item>
      <Dropdown.Item as='button'>Something else</Dropdown.Item>
    </DropdownButton>
  )
}

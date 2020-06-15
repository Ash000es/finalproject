import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
// import { sortbyPrice } from '../../Helper/Helper'

export const DropDownFilter = (props) => {
  const hotelsResults = props.HotelsResults
  console.log(hotelsResults, 'props')
  const sortbyPrice = (e) => {
    console.log(e.target.value, 'checking the argument ')
    const res = hotelsResults.sort(function (a, b) {
      console.log('sorting ..')
      return parseFloat(a.minRate) - parseFloat(b.minRate)
    })
    console.log(res, 'iam res')
    props.onClick(res)
    // setState({ results: arr })
  }

  const sortByReview = (e) => {
    console.log(e.target.value, 'checking the argument ')
    const res = hotelsResults.sort(function (a, b) {
      console.log('sorting review 1..')
      return parseFloat(b.reviews[0].reviewCount) - parseFloat(a.reviews[0].reviewCount)
    })
    console.log(res, 'first res')
    // const finalRes = res.sort(function (a, b) {
    //   console.log('sorting review2 ..')
    //   return parseFloat(b.reviews[0].rate) - parseFloat(a.reviews[0].rate)
    // })
    console.log(res, 'iam final res')
    props.onClick(res)
    // setState({ results: arr })
  }
  return (
    <DropdownButton id='dropdown-item-button' title='Dropdown button'>
      <Dropdown.Item onClick={sortbyPrice} as='button'>Sort by Price</Dropdown.Item>
      <Dropdown.Item onClick={sortByReview} as='button'>Sort by Review</Dropdown.Item>
      <Dropdown.Item as='button'>Something else</Dropdown.Item>
    </DropdownButton>
  )
}

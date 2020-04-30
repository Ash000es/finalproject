import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export const DropDownFilter = () => {
  const sortbyPrice = (arr) => {
    arr.sort(function (a, b) {
      return b.minRate - a.minRate
    })
    // setState({ results: arr })
  }
  return (
    <DropdownButton id='dropdown-item-button' title='Dropdown button'>
      <Dropdown.Item onClick={sortbyPrice} as='button'>Sort by Price</Dropdown.Item>
      <Dropdown.Item as='button'>Another action</Dropdown.Item>
      <Dropdown.Item as='button'>Something else</Dropdown.Item>
    </DropdownButton>
  )
}

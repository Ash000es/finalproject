import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export const DropDownFilter = (props) => {
  return (
    <DropdownButton id='dropdown-item-button' title='Dropdown button'>
      <Dropdown.Item onClick={(e) => props.onClick(e.target.value)} value='Sortby Price' as='button'>Sort by Price</Dropdown.Item>
      <Dropdown.Item onClick={(e) => props.onClick(e.target.value)} value='Sortby review' as='button'>Sort by Review</Dropdown.Item>
      <Dropdown.Item onClick={(e) => props.onClick(e.target.value)} value='Sortby somethingelse' as='button'>Something else</Dropdown.Item>
    </DropdownButton>
  )
}

import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export const DropDownFilter = (props) => {
  return (
    <DropdownButton id='dropdown-item-button' size='sm' variant='light' title='Sort by'>
      <Dropdown.Item variant='light' onClick={(e) => props.onClick(e.target.value)} value='Sortby Price' as='button'>Sort by Price</Dropdown.Item>
      <Dropdown.Item variant='light' onClick={(e) => props.onClick(e.target.value)} value='Sortby review' as='button'>Sort by Review</Dropdown.Item>
      <Dropdown.Item variant='light' onClick={(e) => props.onClick(e.target.value)} value='Sortby recommended' as='button'>Sort by recommended</Dropdown.Item>
    </DropdownButton>
  )
}

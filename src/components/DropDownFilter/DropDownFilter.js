import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export const DropDownFilter = () => {
  return (
    <DropdownButton id='dropdown-item-button' title='Dropdown button'>
      <Dropdown.Item as='button'>Action</Dropdown.Item>
      <Dropdown.Item as='button'>Another action</Dropdown.Item>
      <Dropdown.Item as='button'>Something else</Dropdown.Item>
    </DropdownButton>
  )
}

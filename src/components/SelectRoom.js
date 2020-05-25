import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'

const SelectRoom = (props) => {
  console.log(props, 'iam here in select')
  const roomSelect = (event) => {
    const numberOfRooms = event.target.value
    console.log(numberOfRooms, 'iam here')
  }
  const size = {
    height: '20px', width: '40px'
  }
  const { rate } = props

  const allot = rate.allotment
  console.log(allot, 'alloty')

  const mapAllot = (allot) => {
    const mySet = new Set()

    for (let number = 0; number <= allot; number++) {
      mySet.add(number)
    }
    const array = [...mySet]
    return array
  }
  const res = mapAllot(allot)
  return (
    <Form style={size}>
      <Form.Group onChange={props.onChange} controlId='exampleForm.SelectCustomSizeSm'>

        <Form.Control onChange={props.onChange} as='select' size='sm' custom>

          {res.map(number => <option onChange={props.onChange} key={number} number={number} value={number}>{number}</option>)}

        </Form.Control>
      </Form.Group>

    </Form>

  )
}; export default SelectRoom

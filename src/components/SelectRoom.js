import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'

const SelectRoom = (props) => {
  const size = {
    height: '20px', width: '40px'
  }
  const allot = props.rate.allotment
  console.log(allot, 'lol')

  const mapAllot = (allot) => {
    const mySet = new Set()

    for (let number = 0; number <= allot; number++) {
      mySet.add(number)
      console.log(mySet, 'l')
    }
    const array = [...mySet]
    console.log(array)
    return array
  }
  const res = mapAllot(allot)
  return (
    <Form style={size}>
      <Form.Group controlId='exampleForm.SelectCustomSizeSm'>

        <Form.Control as='select' size='sm' custom>

          {res.map(number => <option key={number} number={number}>{number}</option>)}

        </Form.Control>
      </Form.Group>

    </Form>

  )
}; export default SelectRoom

import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'

const SelectExtra = (props) => {
//   console.log(props, 'props from extras')
  const size = {
    height: '20px', width: '40px'
  }
  const res = [0, 1, 2, 3, 4, 5, 6]

  return (
    <Form style={size}>

      <Form.Group controlId='exampleForm.ControlSelect1'>

        <Form.Control as='select'>
          {res.map(number => <option onChange={props.onChange} key={number} number={number} value={number}>{number}</option>)}

        </Form.Control>

      </Form.Group>

    </Form>

  )
}; export default SelectExtra

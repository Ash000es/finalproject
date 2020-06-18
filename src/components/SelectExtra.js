import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'

const SelectExtra = (props) => {
//   console.log(props, 'props from extras')
  const size = {
    height: '20px', width: '40px'
  }

  return (
    <Form style={size}>

      <Form.Group controlId='exampleForm.ControlSelect1'>

        <Form.Control as='select'>
          <option onChange={(e) => props.onChange(e)} value={1}>1</option>
          <option onChange={(e) => props.onChange(e)} value={2}>2</option>
          <option onChange={(e) => props.onChange(e)} value={3}>3</option>

        </Form.Control>

      </Form.Group>

    </Form>

  )
}; export default SelectExtra

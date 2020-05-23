import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'

const SelectRoom = () => {
  const size = {
    height: '20px', width: '35px'
  }
  return (
    <Form style={size}>
      <Form.Group controlId='exampleForm.SelectCustomSizeSm'>

        <Form.Control as='select' size='sm' custom>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

    </Form>

  )
}; export default SelectRoom

import React from 'react'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import ModalPassword from './ModalPassword'
import Button from 'react-bootstrap/Button'

function FormExample () {
  return (
    <>
      <h4>Settings </h4>
      <Form>

        <Form.Row>
          <Form.Group controlId='formGridEmail'>
            <Form.Label>First name</Form.Label>
            <Form.Control type='First name' placeholder='First name' />
          </Form.Group>

          <Form.Group controlId='formGridPassword'>
            <Form.Label>Last name</Form.Label>
            <Form.Control type='Last name' placeholder='Last name' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group controlId='formGridPassword'>
            <Form.Label>Phone number</Form.Label>
            <Form.Control type='Phone number' placeholder='Phone number' />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId='formGridAddress1'>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder='1234 Main St' />
        </Form.Group>

        <Form.Group controlId='formGridAddress2'>
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder='Apartment, studio, or floor' />
        </Form.Group>

        <Form.Row>
          <Form.Group controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Control as='select' value='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='formGridZip'>
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Row>
            <Form.Group>
              <p>Password: Would you like to change your password? Click the button below and we'll send you an email with a link to reset it.</p>
              {/* <Button variant='outline-primary'>Change password</Button>{' '} */}
              <ModalPassword />
            </Form.Group>
          </Form.Row>
        </Form.Group>

        <Form.Group id='formGridCheckbox'>
          <Form.Check
            type='switch'
            id='custom-switch'
            label='Check this box if you want to remove your account but we will be sad to see you go'
          />

        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>

      </Form>
    </>
  )
}

export default FormExample

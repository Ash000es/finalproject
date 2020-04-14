import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ChangeDatesDiff = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Change dates</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Good news! Your dates are available. Check your new dates of your stay below:</p>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>Old details</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Check-in</Card.Subtitle>|<Card.Subtitle className='mb-2 text-muted'>Check-out</Card.Subtitle>
            <Card.Text>Fri 4 Sept 2020</Card.Text>| <Card.Text>Sun 6 Sept 2020</Card.Text>

          </Card.Body>

        </Card>
        <Card>
          <Card.Body>
            <Card.Title><p>New dates:</p></Card.Title>|<Card.Title><p>284$</p></Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Check-in</Card.Subtitle>|<Card.Subtitle className='mb-2 text-muted'>Check-out</Card.Subtitle>
            <Card.Text>Tue 1 Sept 2020</Card.Text>|<Card.Text>Thu 3 Sept 2020</Card.Text>

          </Card.Body>

          <Card.Footer className='text-muted'><p>Refund due</p><p>20$</p></Card.Footer>
        </Card>
        <p>Please be aware of any price differences. This may be due to different rates on different days of the</p>

      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary'>Cancel</Button>
        <Button variant='primary'>Sumbmit changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}; export default ChangeDatesDiff

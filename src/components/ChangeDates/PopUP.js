import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DatePicker from '../DatePicker/DatePicker'
import DatePicker2 from '../DatePicker2/DatePicker2'

function MyVerticallyCenteredModal (props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Change dates
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          <DatePicker />
          <DatePicker2 />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>Cancel</Button>
        <Button variant='primary'>Change dates</Button>
      </Modal.Footer>
    </Modal>
  )
}

export const App = () => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Check availability
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ChangeDatesDiff from './OldvsNew'
import { ShowDatePicker } from './DatePicker'
import DateRange from '../DateRange/DateRange'

function MyVerticallyCenteredModal (props) {
  const [showDatePicker, setShowDatePicker] = React.useState(true)

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
          Hi there,s sssss
          {showDatePicker ? <DateRange /> : <ChangeDatesDiff />}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>Cancel</Button>
        <Button variant='primary' onClick={() => setShowDatePicker(false)}>Change dates</Button>

      </Modal.Footer>
    </Modal>
  )
}

export const ChangeDatePopup = () => {
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

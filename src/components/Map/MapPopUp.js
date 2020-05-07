import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { GoogleMapPopUp, WrapperMap } from './GoogleMapPopUp'
import Button from 'react-bootstrap/Button'
import { googleAPIKey } from '../assets/Constants'
import { MyProvider, ProjectContext } from '../Provider/Provider'

const MapPopUp = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button variant='primary' onClick={() => setShow(true)}>
        Show on Map
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-900w'
        aria-labelledby='example-custom-modal-styling-title'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div style={{ width: '100%', height: '400px' }}>
            <WrapperMap
              googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&Key=${googleAPIKey}'}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}; export default MapPopUp

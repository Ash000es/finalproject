import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { GoogleMapPopUp, WrapperMap } from './GoogleMapPopUp'
import Button from 'react-bootstrap/Button'
import { googleAPIKey, googleURL } from '../../Helper/Constants'
import { MyProvider, ProjectContext } from '../../providers/Provider'

const MapPopUp = (props) => {
  console.log(props, 'map pop up')
  const [show, setShow] = useState(false)

  return (
    <>

      <Button variant='primary' onClick={() => setShow(true)}>
        Show on Map
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-2000w'
        aria-labelledby='example-custom-modal-styling-title'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div style={{ width: '100%', height: '600px' }}>
            <WrapperMap
              googleMapURL={googleURL}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              lat={props.lat}
              long={props.long}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}; export default MapPopUp

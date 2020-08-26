import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { GoogleMapPopUp, WrapperMap } from './GoogleMapPopUp'
import Button from '@material-ui/core/Button'
import { googleAPIKey, googleURL } from '../../Helper/Constants'
import { MyProvider, ProjectContext } from '../../providers/Provider'

const MapPopUp = (props) => {
  console.log(props, 'map pop up')
  const [show, setShow] = useState(false)

  return (
    < >
      <Button style={{ color: props.mapHotelsResults.length ? 'green' : 'blue' }} size='small' color='primary' onClick={() => setShow(true)}>
        Show map
      </Button>

      <Modal
        show={show}
        size='xl'
        onHide={() => setShow(false)}
        dialogClassName='modal-2000w'
        aria-labelledby='example-custom-modal-styling-title'

      >
        <Modal.Header closeButton>
          {/* <Modal.Title id='example-custom-modal-styling-title'>
            Custom Modal Styling
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>

          <div style={{ width: 1000, height: 500 }}>
            <WrapperMap
              googleMapURL={googleURL}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              lat={props.lat}
              long={props.long}
              mapHotelsResults={props.mapHotelsResults}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}; export default MapPopUp

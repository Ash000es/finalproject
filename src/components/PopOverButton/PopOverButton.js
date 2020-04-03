import React from 'react'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'

function renderTooltip (props) {
  return (
    <Tooltip id='button-tooltip' {...props}>
      there is so much shit that needs to go in here so I hope you can grow as much as needed
    </Tooltip>
  )
}

export const Example = () => (
  <OverlayTrigger overlay={<Tooltip id='tooltip-disabled'>Lots of information goes here I hope</Tooltip>}>
    <span className='d-inline-block'>
      <Button disabled style={{ pointerEvents: 'none' }}>
        Learn more
      </Button>
    </span>
  </OverlayTrigger>
)

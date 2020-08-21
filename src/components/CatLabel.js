import Badge from 'react-bootstrap/Badge'
import React from 'react'

const CatLabel = (props) => {
  return (
    <div>

      <Badge className='text-white font-weight-normal' style={props.look}>{props.name}</Badge>{' '}
    </div>
  )
}; export default CatLabel

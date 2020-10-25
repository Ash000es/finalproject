import Badge from 'react-bootstrap/Badge'
import React from 'react'

const CatLabel = (props) => {
  return (

    <Badge className='text-white font-weight-normal' style={props.look}>
      {props.name}
    </Badge>

  )
}
export default CatLabel

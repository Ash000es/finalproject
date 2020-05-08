import Badge from 'react-bootstrap/Badge'
import React from 'react'

const color = 'rgb(42,120,24)'
const LabelEssential = () => {
  return (
    <div>

      <Badge className='text-white font-weight-normal' style={{ background: color }}>Essential</Badge>{' '}
    </div>
  )
}; export default LabelEssential

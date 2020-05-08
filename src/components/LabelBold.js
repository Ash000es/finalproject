import Badge from 'react-bootstrap/Badge'
import React from 'react'

const color = 'rgb(5,94,112)'
const LabelBold = () => {
  return (
    <div>

      <Badge className='text-white font-weight-normal' style={{ background: color }}>Bold</Badge>{' '}
    </div>
  )
}; export default LabelBold

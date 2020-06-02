import React, { useContext, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
export const Spinning = () => {
  return (
    <Spinner animation='border' role='status' variant='primary'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

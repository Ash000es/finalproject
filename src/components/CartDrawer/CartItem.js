import React, { useState, useContext } from 'react'
import { MyProvider, ProjectContext } from '../Provider/Provider'
import Toast from 'react-bootstrap/Toast'

export const CartItem = (props) => {
  // onClick function to either remove or take you to hotel page via router, also set results to that hotel object
  const { project, setProject } = useContext(ProjectContext)
  const { hotelsArray } = project.cartItems

  return (
    <div>

      return (
      <Toast>
        <Toast.Header>
          <img src='https://source.unsplash.com/random' className='rounded mr-2' alt='' style={{ width: 300 }} />
          <strong className='mr-auto'>{props.name}</strong>
          <small>{props.price}</small>
        </Toast.Header>
        <Toast.Body>check in information</Toast.Body>
      </Toast>
      )

    </div>
  )
}

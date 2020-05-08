import React, { useState, useContext } from 'react'
import { MyProvider, ProjectContext } from './Provider/Provider'
import Toast from 'react-bootstrap/Toast'
import CloseIcon from '@material-ui/icons/Close'

export const CartItem = (props) => {
  const { project, setProject } = useContext(ProjectContext)
  // onClick function to remove the clicked item from the cart drawer
  const removeItem = (e) => {
    const { cartItems } = project.cartItems
    cartItems.filter(item => {
      item.code = !e.code
      setProject({ ...project, cartItems })
    })
  }

  return (
    <div>

      return (
      <Toast>
        <Toast.Header>
          <i onClick={removeItem} code={props.code}><CloseIcon /></i>
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

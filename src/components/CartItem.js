import React, { useState, useContext } from 'react'
import { MyProvider, ProjectContext } from '../providers/Provider'
import Toast from 'react-bootstrap/Toast'
import CloseIcon from '@material-ui/icons/Close'

export const CartItem = (props) => {
  console.log(props, 'iam item from cart')
  const { project, setProject } = useContext(ProjectContext)
  // onClick function to remove the clicked item from the cart drawer
  const removeItem = (e) => {
    console.log(e, 'eeee')
    const { cartItems } = project.cartItems
    cartItems.filter(item => {
      item.code = !e.code
      setProject({ ...project, cartItems })
    })
  }

  return (
    <div>

      <Toast>
        <Toast.Header>
          <i onClick={removeItem} code={props.item.code}><CloseIcon /></i>
          <img src='https://source.unsplash.com/random' className='rounded mr-2' alt='' style={{ width: 300 }} />
          <strong className='mr-auto'>{props.item.boardName}</strong>
          <small>{props.item.net}</small>
        </Toast.Header>
        <Toast.Body>{props.item.roomType}</Toast.Body>
      </Toast>

    </div>
  )
}

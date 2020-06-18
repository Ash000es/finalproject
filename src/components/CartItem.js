import React, { useState, useContext } from 'react'
import { MyProvider, ProjectContext } from '../providers/Provider'
import Toast from 'react-bootstrap/Toast'
import CloseIcon from '@material-ui/icons/Close'

export const CartItem = (props) => {
  console.log(props, 'iam item from cart')

  return (
    <div>

      <Toast onClick={(e) => props.onClick(e)} value={props.item.code}>
        <Toast.Header>
          <i><CloseIcon /></i>
          <img src='https://source.unsplash.com/random' className='rounded mr-2' alt='' style={{ width: 300 }} />
          <strong className='mr-auto'>{props.item.boardName}</strong>
          <small>{props.item.mySellingRate}</small>
        </Toast.Header>
        <Toast.Body>{props.item.roomNumber}{props.item.roomType}</Toast.Body>
      </Toast>

    </div>
  )
}

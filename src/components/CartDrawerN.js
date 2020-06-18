import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
// import './index.css'
import { Drawer, Button } from 'antd'

export const CartDrawer = (props) => {
  const [visible, setVisible] = useState(false)
  const extrasCartItems = props.totalSelectedExtrasInfo
  const roomssCartItems = props.totalSelectedRoomsInfo

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  const style = { width: 350 }

  return (
    <>
      <Button type='primary' onClick={showDrawer}>
        Show Cart
      </Button>
      <Drawer
        title='Basic Drawer'
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}

      >
        {roomssCartItems && roomssCartItems.map((room, i) => {
          return (
            <div key={i} room={room}>
              <p>{room.roomType}</p>
              <p>{room.mySellingRate}</p>
            </div>

          )
        })}
        {extrasCartItems && extrasCartItems.map((extra, i) => {
          return (
            <div key={i} extra={extra}>
              <p>{extra.title}</p>
              <p>{extra.price}</p>
            </div>
          )
        })}

      </Drawer>
    </>
  )
}

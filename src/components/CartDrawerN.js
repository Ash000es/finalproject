import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
// import './index.css'
import { Drawer, Button } from 'antd'

export const CartDrawer = () => {
  const [visible, setVisible] = useState(false)

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
        Open
      </Button>
      <Drawer
        title='Basic Drawer'
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}

      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

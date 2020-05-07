import React, { useState, useContext } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import MyFav from '../MyProfile/MyFav'
import { MyProvider, ProjectContext } from '../Provider/Provider'
import { CartBadge } from '../CartDrawer/CartBadge'
import { CartItem } from '../CartDrawer/CartItem'

const useStyles = makeStyles({
  list: {
    width: 350
  },
  fullList: {
    width: 'auto'
  }
})

export default function CartDrawer () {
  const classes = useStyles()
  const { project, setProject } = useContext(ProjectContext)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })
  console.log(state)
  const hotelsArray = []
  const totalPrice = project.cartItems.reduce((acc, curr) => acc + curr.price, 0)

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(event)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
    setProject({ ...project, cartOpen: true })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <span>{project.cartItems.length}</span>
      {hotelsArray ? hotelsArray.map(item => {
        return <CartItem key={item} item={item} />
      }) : null}
      <span>Total price:0</span>
    </div>
  )

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>View your cart</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

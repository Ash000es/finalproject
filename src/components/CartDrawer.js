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
import MyFav from './MyProfile/MyFav'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { CartBadge } from './CartBadge'
import { CartItem } from './CartItem'

const useStyles = makeStyles({
  list: {
    width: 350
  },
  fullList: {
    width: 'auto'
  }
})

export default function CartDrawer (props) {
  console.log(props, 'props from cartdrawer')
  const classes = useStyles()
  const { currentCartItem } = props
  console.log(currentCartItem, 'new name')
  const { project, setProject } = useContext(ProjectContext)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })
  const addToCart = () => {
    setProject({ ...project, cartItems: currentCartItem })
  }
  const cartItems1 = project.cartItems
  // console.log(project, 'newest project')
  // getting the total price of the cart items
  // const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0)

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(event.target.value, 'I am event from cartdrawer')
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      addToCart()
      return
    }

    setState({ ...state, [anchor]: open })
    // not sure if this is needed?
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
      {/* mapping inside the cart drwarer a number of items  */}
      <span>{currentCartItem.length}</span>
      {currentCartItem && currentCartItem.map(item => {
        console.log(item, 'item')
        return <CartItem key={item.code} item={item} />
      })}
      <span>{project.currentHotel.name}</span>
    </div>
  )

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Add to cart</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

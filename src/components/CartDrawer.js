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
  const classes = useStyles()
  const { project, setProject } = useContext(ProjectContext)
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })
  const [updatecart, setUpdateCart] = useState(false)
  const totalSelectedRoomsInfo = props.totalSelectedRoomsInfo
  console.log(totalSelectedRoomsInfo, ' from cartdrawer')

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [anchor]: open })
    setUpdateCart(!updatecart)
  }
  const handleRemovedItem = (e) => {
    const argument = e.target.value
    console.log(argument)
    const removeItem = (argument) => {
      totalSelectedRoomsInfo.filter(item => {
        item.code = !argument
        return item
      // setProject({ ...project, cartItems: })
      })
    }
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
      <span>{totalSelectedRoomsInfo ? totalSelectedRoomsInfo.length + 1 : null}</span>
      {totalSelectedRoomsInfo && totalSelectedRoomsInfo.map(item => {
        console.log(item, 'item')
        return <CartItem key={item.code} item={item} onClick={handleRemovedItem} />
      })}
      <span>Hotel:{project.currentHotel.name}</span>
    </div>
  )

  return (
    <div>
      {['right'].map((anchor, i) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true, i)}>Add to cart</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

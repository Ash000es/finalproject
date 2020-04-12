import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import FormExample from './FormExample'
import FallbackAvatars from './Avatar'
import MyFav from './MyFav'

const MENU_ITEMS = ['profile', 'account', 'settings']
const key = ''
const name = ''

export default function SimpleMenu (props) {
  console.log('hello there', props)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClose = (e) => {
    setAnchorEl(null)
    console.log('high again', e)
  }

  const handleClick = (event) => {
    console.log('secound high', event)
    setAnchorEl(event.currentTarget)
  }

  const handleOnClick = key => {
    switch (key) {
      case 'profile':
        return console.log('go to profile')
      case 'account':
        return <MyFav />
      case 'settings':
        return <FormExample />
      default:
        return null // return null, not "Error"
    }
  }

  return (
    <div>
      <FallbackAvatars src='/broken-image.jpg' />
      <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
        Arvin
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={props.handleChange}
      >
        <MenuItem onClick={handleClose} onClickItem={() => handleOnClick(key)} key='profile'>Profile</MenuItem>
        <MenuItem onClick={handleClose} onClickItem={() => handleOnClick(key)} key='account'>My account</MenuItem>
        <MenuItem onClick={handleClose} onClickItem={() => handleOnClick(key)} key='settings'>My settings</MenuItem>
      </Menu>
      {function Menu () {
        const handleOnClick = key => {
          switch (key) {
            case 'profile':
              return console.log('go to profile')
            case 'account':
              return console.log('go to account')
            case 'settings':
              return <FormExample />
            default:
              return null // return null, not "Error"
          }
        }
        return MENU_ITEMS.map(i => (
          <MenuItem key={i} name={i} onClickItem={() => handleOnClick(i)} />
        ))
      }}
      <div>{handleOnClick(key)}</div>
      <FormExample />

    </div>
  )
}

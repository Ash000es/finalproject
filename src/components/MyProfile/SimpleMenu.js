import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import FormExample from './FormExample'
import FallbackAvatars from './Avatar'
import MyFav from './MyFav'

const MENU_ITEMS = ['Profile', 'My account', 'My settings']

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

  const handleOnClick = (item) => {
    console.log(item)
    props.onSelect(item)
    handleClose()
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
        // onClick={props.handleChange}
      >{MENU_ITEMS.map(item => <MenuItem onClick={() => handleOnClick(item)}>{item}</MenuItem>)}

      </Menu>

      {/* <FormExample /> */}

    </div>
  )
}

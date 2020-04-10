import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MySettings from './MySettings'
import FallbackAvatars from './Avatar'

export default function SimpleMenu (props) {
  console.log('hello there', props)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    console.log('secound high', event)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleChange = (e) => {
    console.log('high again', e)
    const name = e.target.value
    console.log(name)
    props.onChange(name)
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
      >
        <MenuItem
          onClick={() => {
            handleClose()
            props.handleChange()
          }} name='profile'
        >Profile
        </MenuItem>
        <MenuItem onClick={handleClose} name='my account'>My account</MenuItem>
        <MenuItem
          onClick={handleClose} name='my settings'
        >My settings
        </MenuItem>
      </Menu>

    </div>
  )
}

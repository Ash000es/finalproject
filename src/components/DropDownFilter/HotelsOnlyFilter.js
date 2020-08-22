import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from 'react-bootstrap/Button'

const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    Button: {
      borderColor: '#FF8B00',
      color: '#FF8B00',
      textTransform: 'capitalize'
    }
  }
}))

export const HotelsOnly = (props) => {
  const classes = useStyles()

  const [state, setState] = useState('outline-warning')
  const hanldeOnClick = () => {
    if (state === 'outline-warning') {
      setState('primary')
    } if ((state === 'primary')) {
      setState('outline-warning')
    }

    props.onClick()
  }

  console.log(state, 'state')
  return (
    // <div id={classes.Button}>
    // <Button onClick={props.onClick} size='small' variant='outlined'>Hotels</Button>
    <Button variant={state} size='md' onClick={hanldeOnClick} className={classes.Button}>
      Primary button
    </Button>

    // </div>
  )
}

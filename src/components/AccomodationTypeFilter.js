import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from 'react-bootstrap/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    Button: {
      border: '1px solid black',

      textTransform: 'capitalize',
      fontWeight: '500',
      backgroundColor: 'red'
    }
  }
}))

export const AccomodationTypeFilter = (props) => {
  const classes = useStyles()

  const [state, setState] = useState('outline-*')

  const hanldeOnClick = () => {
    if (state === 'outline-*') {
      setState('success')
    }
    if (state === 'success') {
      setState('outline-*')
    }

    props.onClick()
  }
  const style = {
    border: '0.5px solid black',

    textTransform: 'capitalize',
    fontWeight: '400'
  }
  return (
    <div>
      <Button variant={state} size='sm' onClick={hanldeOnClick} style={style}>
        {props.name}
      </Button>
    </div>
  )
}

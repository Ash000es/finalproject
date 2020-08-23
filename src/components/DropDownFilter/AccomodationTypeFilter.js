import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from 'react-bootstrap/Button'

const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    Button: {
      // borderColor: 'black',
      border: '1px solid black',
      // color: '#FF8B00',
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
    } if (state === 'success') {
      setState('outline-*')
    }

    props.onClick()
  }

  return (
    <div className={classes.Button}>

      <Button variant={state} size='sm' onClick={hanldeOnClick} className={classes.root}>
        {props.name}
      </Button>

    </div>
  )
}

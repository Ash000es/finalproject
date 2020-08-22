import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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

  return (
    // <div id={classes.Button}>
    <Button onClick={props.onClick} size='small' variant='outlined'>Hotels</Button>

    // </div>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import './SearchField.css'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 500

  },
  input: {
    marginLeft: theme.spacing(1),
    // flex: 1,
    width: '100%'
  },
  iconButton: {
    padding: '0.625rem'
  },
  searchInput: {
    width: '100%',
    marginLeft: theme.spacing(1)
    // flex: 1

  }

}))

export default function SearchField (props) {
  const classes = useStyles()
  const screenWidth = props.width

  let style
  const style1 = {
    height: '100%',
    width: '100%'
  }
  const style2 = {
    height: 36

  }
  const style3 = {
    maxWidth: 686
  }

  const handleChange = (e) => {
    const name = e.target.value

    props.onChange(name)
  }

  if (screenWidth > 992) {
    style = style1
  } if (screenWidth <= 992 && screenWidth >= 835) {
    style = style2
  } if (screenWidth < 835) {
    style = style3
  }
  const fullWidth = screenWidth < 835
  return (
    <Paper component='form' style={style} className={classes.root}>

      <InputBase
        onChange={handleChange}
        className={classes.input}
        placeholder='Where to?'
        inputProps={{ 'aria-label': 'Where to?' }}
        fullWidth={fullWidth}
        margin='dense'
        required
        type='search'
        style={style}

      />
      <IconButton type='submit' className={classes.iconButton} aria-label='search'>
        <SearchIcon />
      </IconButton>

    </Paper>
  )
}

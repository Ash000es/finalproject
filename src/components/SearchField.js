import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    border: '0.5px solid #d9d9d9',
    boxShadow: theme.shadows[0],
    alignItems: 'center',
    maxWidth: 500,
    [theme.breakpoints.up(992)]: {
      height: '100%',
      width: '100%'
    },
    [theme.breakpoints.between(835, 992)]: {
      height: 36
    },
    [theme.breakpoints.down(835)]: {
      maxWidth: 686
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '100%'

  },
  iconButton: {
    padding: '0.625rem'
  },
  searchInput: {
    width: '100%',
    marginLeft: theme.spacing(1),
    flex: 1
  }
}))

export default function SearchField (props) {
  const classes = useStyles()
  const screenWidth = props.width
  const fullWidth = screenWidth < 835

  const handleChange = (e) => {
    const name = e.target.value

    props.onChange(name)
  }

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        onChange={handleChange}
        className={classes.input}
        placeholder='Where to?'
        inputProps={{ 'aria-label': 'Where to?' }}
        fullWidth={fullWidth}
        margin='dense'
        required
        type='search'
      />
      <IconButton type='submit' className={classes.iconButton} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

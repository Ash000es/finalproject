import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }

}))

export default function CustomizedInputBase (props) {
  const classes = useStyles()

  const handleChange = (e) => {
    const name = e.target.value;
    console.log(name)
    props.onChange(name);
  }

  return (
    <Paper component='form' className={classes.root} >

      <InputBase
      onChange={handleChange}
        className={classes.input}
        placeholder='Where to?'
        inputProps={{ 'aria-label': 'Where to?' }}
      />
      <IconButton type='submit' className={classes.iconButton} aria-label='search'>
        <SearchIcon />
      </IconButton>

    </Paper>
  )
}

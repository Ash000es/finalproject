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
    alignItems: 'center'

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: '0.625rem'
  },
  searchInput: {

  }

}))

export default function SearchField (props) {
  const classes = useStyles()
  const screenWidth = props.width
  const fullWidth = screenWidth <= 479
  const style = {
    height: screenWidth <= 992 ? 36 : '100%',
    // width: screenWidth <= 992 ? 219.72 : '100%'
    block: screenWidth <= 779

  }

  const handleChange = (e) => {
    const name = e.target.value
    // console.log(name)
    props.onChange(name)
  }

  return (
    <Paper component='form' style={style} className={classes.root}>

      <InputBase
        onChange={handleChange}
        // className={classes.input}
        placeholder='Where to?'
        inputProps={{ 'aria-label': 'Where to?' }}
        fullWidth={style.block}
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

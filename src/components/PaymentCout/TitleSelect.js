import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const currencies = [
  {
    value: 'mr',
    label: 'Mr'
  },
  {
    value: 'ms',
    label: 'Ms'
  },
  {
    value: 'mrs',
    label: 'Mrs'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}))

export default function MultilineTextFields () {
  const classes = useStyles()
  const [currency, setCurrency] = React.useState('EUR')

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id='standard-select-currency'
          select
          label='Title'
          value={currency}
          onChange={handleChange}
          helperText=''
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </div>
    </form>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const currencies = [
  {
    value: 'amex',
    label: 'American Express'
  },
  {
    value: 'visa',
    label: 'Visa'
  },
  {
    value: 'mastercard',
    label: 'MasterCard'
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

export default function MultilineTextFields3 () {
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
          label='Card type'
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

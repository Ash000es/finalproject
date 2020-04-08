import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MultilineTextFields from './TitleSelect'
import MultilineTextFields2 from './SpecialRequest'
import CheckboxLabels from './CheckBox'
import MultilineTextFields3 from './CardType'
import DisableElevation from './PaymentButton'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}))

export default function BasicTextFields () {
  const classes = useStyles()

  return (
    <>
      <form className={classes.root} noValidate autoComplete='off'>
        <h4>Billing details</h4>
        <MultilineTextFields />
        <TextField id='standard-basic' label='Name' />
        <TextField id='standard-basic' label='Last name' />
        <TextField id='standard-basic' label='Email' />
        <TextField id='standard-basic' label='Confirm email' />
        <TextField id='standard-basic' label='Country' />
        <TextField id='standard-basic' label='Zip code' />
        <h4>Traveler details</h4>
        <>
          <CheckboxLabels />
          <MultilineTextFields2 />
        </>
      </form>
      <form className={classes.root} noValidate autoComplete='off'>
        <h4>Pay with</h4>
        <TextField id='standard-basic' label='Name on card' />
        <MultilineTextFields3 />
        <TextField id='standard-basic' label='Credit card number' />
        <TextField id='standard-basic' label='CVC' />
        <TextField id='standard-basic' label='MM/YY' />
      </form>

    </>
  )
}

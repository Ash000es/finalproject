import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color='default' {...props} />)

export default function CheckboxLabels () {
  const [state, setState] = React.useState({

    checkedG: true
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <FormGroup row>

      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name='checkedG' />}
        label='Same as above'
      />

    </FormGroup>
  )
}

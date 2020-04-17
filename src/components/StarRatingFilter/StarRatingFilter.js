import { FaBeer } from 'react-icons/fa'
import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import { ListItem } from '@material-ui/core'
import { Icon } from 'rsuite'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const names = [
  '3 Stars',
  '4 Stars',
  '5 Stars'
]

function getStyles (name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}

export default function MultipleSelectStars () {
  const classes = useStyles()
  const theme = useTheme()
  const [personName, setPersonName] = React.useState([])

  const handleChange = (event) => {
    setPersonName(event.target.value)
  }

  const handleChangeMultiple = (event) => {
    const { options } = event.target
    const value = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setPersonName(value)
  }

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id='demo-mutiple-checkbox-label'>Star Rating</InputLabel>
        <Select
          labelId='demo-mutiple-checkbox-label'
          id='demo-mutiple-checkbox'
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >

          <MenuItem key='3 Stars' value='3 Stars'>
            <Checkbox checked={personName.indexOf('3 Stars') > -1} />
            <ListItemText primary='3 Stars' />
            <Icon icon='star' /><Icon icon='star' /><Icon icon='star' />

          </MenuItem>

          <MenuItem key='4 Stars' value='4 Stars'>
            <Checkbox checked={personName.indexOf('4 Stars') > -1} />
            <ListItemText primary='4 Stars' />
            <Icon icon='star' /><Icon icon='star' /><Icon icon='star' /><Icon icon='star' />

          </MenuItem>
          <MenuItem key='5 Stars' value='5 Stars'>
            <Checkbox checked={personName.indexOf('5 Stars') > -1} />
            <ListItemText primary='5 Stars' />
            <Icon icon='star' /><Icon icon='star' /><Icon icon='star' /><Icon icon='star' /><Icon icon='star' />

          </MenuItem>

        </Select>
      </FormControl>

    </div>
  )
}

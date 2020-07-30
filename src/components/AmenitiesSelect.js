import React, { useContext, useState } from 'react'
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
import { amenitiesToFilter, amenDirectory } from '../Helper/Constants.js'
import { MyProvider, ProjectContext } from '../providers/Provider'

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

function getStyles (name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}

const AmenitiesSelect = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [amenitiesName, setamenitiesName] = React.useState([])

  const { project, setProject } = useContext(ProjectContext)
  const [chossenAmenities, setChossenAmenities] = useState()

  const handleChange = (event) => {
    // ['TV', 'Pool']
    const { value } = event.target
    console.log(value, 'value')
    const nestedArr = value.map(item => {
      return amenDirectory[item]
    })
    const res = nestedArr.flat()
    setChossenAmenities(res)
    setamenitiesName(value)
    props.onChange(res)
  }

  const handleChangeMultiple = (event) => {
    const { options } = event.target
    const value = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setamenitiesName(value)
  }

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id='demo-mutiple-checkbox-label'>Amenities</InputLabel>
        <Select
          labelId='demo-mutiple-checkbox-label'
          id='demo-mutiple-checkbox'
          multiple
          value={amenitiesName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {amenitiesToFilter.map((name) => (
            <MenuItem key={Math.random()} value={name}>
              <Checkbox checked={amenitiesName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
  )
}; export default AmenitiesSelect

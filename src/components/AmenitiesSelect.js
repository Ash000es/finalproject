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
  // console.log(amenitiesName, 'I amhere')
  const { project, setProject } = useContext(ProjectContext)
  const [chossenAmenities, setChossenAmenities] = useState()

  // const chossenAmenities = []
  // had to comment out cause it return undefined
  // const { hotels } = project.hotels
  // const { amenitesArray } = hotels.amenities

  // const filterOutHotels = () => {
  //   amenitesArray.forEach(amenObject => chossenAmenities.forEach(chossenAmen => {
  //     if (amenObject.facilityCode === chossenAmen.amenitieCode && amenObject.facilityGroupCode === chossenAmen.amenitiGroupCode) {
  //       // need to return a new array of hotel here to update state but I was comparing the amenites
  //       setProject({ ...project })
  //     }
  //   })
  //   )
  // }

  const handleChange = (event) => {
    // ['TV', 'Pool']
    const { value } = event.target
    console.log(value, 'value')
    const nestedArr = value.map(item => {
      return amenDirectory[item]
    })
    const res = nestedArr.flat()
    console.log(res, 'results flatned')
    setChossenAmenities(res)
    setamenitiesName(value)
    props.onChange(res)
  }

  // const filterAmenSelection = (amenitiesArray, hotelsresults) => {
  //   // function here
  //   const finalHotels = []
  //   const hotelsresultsAmen = hotelsresults.map(hotel => {
  //     const amenAmen = hotel.facilites.map(hotelResAmen => amenitiesArray.forEach(amenArr => {
  //       if (hotelResAmen.facilityCode === amenArr.FacilityCode && hotelResAmen.GroupCode === amenArr.GroupCode) {
  //         finalHotels.push(hotel)
  //       }
  //     }))
  //     return finalHotels
  //   })
  //   return finalHotels
  // }

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

import React, { useState } from 'react'
import { Select } from 'antd'
import { amenitiesToFilter, amenDirectory } from '../Helper/Constants.js'

const NewAmenitiesSelect = (props) => {
  const [amenitiesName, setamenitiesName] = useState([])
  const [chossenAmenities, setChossenAmenities] = useState()

  const handleChange = (amenitiesName) => {
    const nestedArr = amenitiesName.map(item => {
      // console.log(item, 'item')
      return amenDirectory[item]
    })
    const res = nestedArr.flat()
    // console.log(res, 'nested here')
    setChossenAmenities(res)
    setamenitiesName(amenitiesName)
    props.onChange(res)
  }

  const filteredOptions = amenitiesToFilter.filter(o => !amenitiesName.includes(o))
  return (
    <Select
      mode='multiple'
      placeholder='Choose Amenities'
      value={amenitiesName}
      onChange={handleChange}
      className='amenFilter'
      style={{ width: '25%' }}
      size='large'
      bordered

    >
      {filteredOptions.map(item => (
        <Select.Option key={item} value={item} className='amenFilter'>
          {item}
        </Select.Option>
      ))}
    </Select>
  )
}; export default NewAmenitiesSelect

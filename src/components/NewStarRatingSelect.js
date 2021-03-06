import React, { useState } from 'react'
import { Select } from 'antd'

const OPTIONS = ['3 stars', '4 stars', '5 stars']

const StartRatingSelect = (props) => {
  const [selectedItems, setSelectedItems] = useState([])

  const handleChange = (selectedItems) => {
    setSelectedItems(selectedItems)
    props.onChange(selectedItems)
  }

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o))
  return (
    <Select
      mode='multiple'
      placeholder='Star ratings'
      value={selectedItems}
      onChange={handleChange}
      style={{ width: '25%' }}
      size='large'
      bordered
    >
      {filteredOptions.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  )
}
export default StartRatingSelect

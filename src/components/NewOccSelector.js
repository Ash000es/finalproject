import React, { useContext, useState } from 'react'
import { InputNumber } from 'antd'

const NewOccSelector = (props) => {
  function onChange (value) {
    console.log('changed', value)
  }
  return (
    <>

      <InputNumber size='large' min={0} max={10} defaultValue={0} onChange={props.onChange} />
    </>
  )
}; export default NewOccSelector

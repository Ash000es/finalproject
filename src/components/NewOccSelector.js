import React, { useContext, useState } from 'react'
import { InputNumber } from 'antd'

const NewOccSelector = (props) => {
  function onChange (value) {

  }
  const style = {
    height: '2.975rem'
  }
  return (
    <>

      <InputNumber size='large' type='number' placeholder='adult' style={style} min={0} max={10} defaultValue={0} onChange={props.onChange} />
    </>
  )
}; export default NewOccSelector

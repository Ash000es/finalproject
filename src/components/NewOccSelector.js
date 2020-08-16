import React, { useContext, useState } from 'react'
import { InputNumber } from 'antd'

const NewOccSelector = (props) => {
  function onChange (value) {

  }
  const width = props.width
  const style1 = {
    height: '3rem'

  }
  const style2 = {
    heightSmall: '2rem'
  }
  return (
    <>

      <InputNumber style={width >= 928 ? style1 : style2} type='number' min={0} max={10} defaultValue={0} onChange={props.onChange} />
    </>
  )
}; export default NewOccSelector

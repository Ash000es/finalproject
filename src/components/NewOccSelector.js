import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { InputNumber } from 'antd'
import 'antd/dist/antd.css'
import './SearchBar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.up(992)]: {
      height: 48,
      width: 90
    },
    [theme.breakpoints.between(835, 992)]: {
      height: 36,
      width: 52.8
    },
    [theme.breakpoints.down(835)]: {
      height: 50,
      width: 70
    }
  }
}))

const NewOccSelector = (props) => {
  const classes = useStyles()

  return (
    <>
      <InputNumber
        type='number'
        className={classes.root}
        min={0}
        max={10}
        defaultValue={0}
        onChange={props.onChange}
      />
    </>
  )
}
export default NewOccSelector

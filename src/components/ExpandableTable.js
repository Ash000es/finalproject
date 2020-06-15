import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import SelectRoom from '../components/SelectRoom'
import { extras } from '../Helper/Constants'
import { roomsCost } from '../Helper/Helper'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

function Row (props) {
  const { room } = props
  const row = room

  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()
  const collectValues = (rate, roomName, event) => {
    const roomType = roomName
    const roomNumber = event.target.value
    const price = rate.net
    const totalSelectionPrice = roomsCost(price, roomNumber)
    const roomSelectionInfo = { ...rate, roomType, roomNumber, totalSelectionPrice }
    console.log(roomSelectionInfo, 'here iam')
    props.onChange(roomSelectionInfo)
  }

  return (
    <>

      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component='th' scope='row'>{row.name}</TableCell>

        {row.rates.map(rate => (

          <TableRow key={rate.rateKey} onChange={(e) => collectValues(rate, row.name, e)}>
            <TableCell />
            <TableCell align='right'>2</TableCell>
            <TableCell />
            <TableCell align='right'> {rate.boardName}</TableCell>
            <TableCell />
            <TableCell align='right'> <SelectRoom rate={rate} /></TableCell>
            <TableCell />
            <TableCell align='right'> {rate.net}</TableCell>
            <TableCell />

          </TableRow>

        ))}

      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Extras
              </Typography>
              <Table size='large' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell align='right'>summary</TableCell>
                    <TableCell align='right'>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {extras.map((extraRow) => (
                    <TableRow key={extraRow.title}>
                      <TableCell component='th' scope='row'>
                        {extraRow.title}
                      </TableCell>
                      <TableCell>{extraRow.price}</TableCell>
                      <TableCell align='right'>{extraRow.summary}</TableCell>
                      <TableCell align='right'>
                        {extraRow.price}
                      </TableCell>
                    </TableRow>
                  ))}

                </TableBody>
              </Table>
            </Box>
          </Collapse>

        </TableCell>

      </TableRow>
    </>
  )
}

Row.propTypes = {
  row: PropTypes.shape({
    sleeps: PropTypes.string.isRequired,
    selectrooms: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    extras: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        summary: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default function CollapsibleTable (props) {
  console.log(props, 'Iam props from collapse')
  const { rooms } = props
  // console.log(rooms, 'roomy here')

  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Room Type</TableCell>
            <TableCell>sleeps</TableCell>
            <TableCell>Included</TableCell>
            <TableCell>selectrooms</TableCell>
            <TableCell>price</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room) => (
            <Row key={Math.random()} room={room} onChange={props.onChange} />
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  )
}

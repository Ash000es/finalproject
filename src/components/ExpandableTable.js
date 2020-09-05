import React from 'react'
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
import { roomsCost, showCancelationPolicy } from '../Helper/Helper'
import SelectExtra from '../components/SelectExtra'
import '../Pages/HotelPage.css'

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
    const price = rate.mySellingRate
    const totalSelectionPrice = roomsCost(price, roomNumber)
    const roomSelectionInfo = { ...rate, roomType, roomNumber, totalSelectionPrice }

    props.onChange(roomSelectionInfo)
  }
  const collectExtrasValues = (extraRow, e) => {
    const extraSelectionNum = Number(e.target.value)
    const extraObj = { ...extraRow, extraSelectionNum }

    props.onChange(extraObj)
  }

  const renderRow = (rate, i) => {
    const cancelationPolicy = showCancelationPolicy(rate)
    return (
      <TableRow key={i} onChange={(e) => collectValues(rate, row.name, e)} id='poten-row'>
        {/* 2 */}
        <TableCell
          align='right'
          id={cancelationPolicy === 'None refundable' ? 'roomsInfo1' : 'freeCancel'}
        >
          <p>{cancelationPolicy}</p>
        </TableCell>
        {/* 3 */}
        <TableCell align='right' id='roomsInfo2'>
          {' '}
          {rate.boardName.toLowerCase()}
        </TableCell>

        {/* 4 */}
        <TableCell align='right' id='roomsInfo3'>
          {' '}
          <div className='selectRooms-div'>
            <SelectRoom rate={rate} />{' '}
          </div>
        </TableCell>

        {/* 5 */}
        <TableCell align='right' id='roomsInfo4'>
          {' '}
          ${rate.mySellingRate}
        </TableCell>
      </TableRow>
    )
  }

  return (
    <>
      <TableRow className={classes.root}>
        {/* 0 */}
        <TableCell id='outerMainRow'>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        {/* 1 */}
        <TableCell scope='row' id='roomsName'>
          {row.name.toLowerCase()}
        </TableCell>
        <TableCell colSpan={4} id='padding-source'>
          {row.rates.map((r, i) => {
            return renderRow(r, i)
          })}
        </TableCell>
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
                    <TableRow
                      key={extraRow.title}
                      onChange={(e) => collectExtrasValues(extraRow, e, extraRow.title)}
                    >
                      <TableCell component='th' scope='row'>
                        {extraRow.title}
                      </TableCell>
                      <TableCell>
                        <SelectExtra extraRow={extraRow} />
                      </TableCell>
                      <TableCell align='right'>{extraRow.summary}</TableCell>
                      <TableCell align='right'>{extraRow.price}</TableCell>
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
  const { rooms } = props

  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow style={{ backgroundColor: '#0088BC', fontWeight: '550' }}>
            {/* 0 */}
            <TableCell />
            {/* 1 */}
            <TableCell align='left' style={{ color: 'white' }}>
              Room Type
            </TableCell>
            {/* 2 */}
            <TableCell align='right' style={{ color: 'white', fontWeight: '550' }}>
              sleeps
            </TableCell>
            {/* 3 */}
            <TableCell align='right' style={{ color: 'white' }}>
              Included
            </TableCell>
            {/* 4 */}
            <TableCell align='right' style={{ color: 'white' }}>
              selectrooms
            </TableCell>
            {/* 5 */}
            <TableCell align='right' style={{ color: 'white' }}>
              price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room, i) => (
            <Row key={i} room={room} onChange={props.onChange} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

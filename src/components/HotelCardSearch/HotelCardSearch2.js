import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ControlledCarousel1 from '../thumbilCarousel/thumbilCarousel'
import { hardHotelObject } from '../assets/HardCode'
import ErrorRadios from '../radioButton/radioButton'
import Extras from '../Extras/Extras'
import { SingleLineGridList } from '../ExtrasList/ExtrasList'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center'
  },
  column: {
    flexBasis: '100%'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

export default function DetailedExpansionPanel () {
  const classes = useStyles()

  return (
    <>

      <Typography className={classes.heading}>{hardHotelObject.destinationName}</Typography>
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>

          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1c-content'
            id='panel1c-header'
          >
            <div className={classes.column}>
              {/* <Typography className={classes.heading}>{hardHotelObject.destinationName}</Typography> */}
              <ControlledCarousel1 />
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>{hardHotelObject.name}</Typography>
              <ul style={{ listStyleType: 'none' }}>{hardHotelObject.hotelAmenities.map(item =>
                <li key={item.title}>{item.Icon}{item.title}</li>
              )}
              </ul>
              <p>{hardHotelObject.label.posh}|{hardHotelObject.zoneName}|{hardHotelObject.categoryName}</p>
            </div>
            <div className={classes.column}>
              <ErrorRadios />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            {/* <div className={classes.column} /> */}
            <div className={classes.column}>
              {/* <Chip label='Barbados' onDelete={() => {}} /> */}
              {/* <Extras /> */}
              <SingleLineGridList />

            </div>
            {/* <div className={clsx(classes.column, classes.helper)}> */}
            {/* <Typography variant='caption'> */}
            {/* Select your destination of choice */}
            {/* <br /> */}
            {/* <a href='#secondary-heading-and-columns' className={classes.link}> */}
            {/* Learn more */}
            {/* </a> */}
            {/* </Typography> */}
            {/* </div> */}
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size='small'>Cancel</Button>
            <Button size='small' color='primary'>
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    </>
  )
}

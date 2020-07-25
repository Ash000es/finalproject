
import React, { useContext, useState, useMemo } from 'react'
import './HotelCardSearch.css'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { SearchResultsCarousel } from '../SearchResultsCarousel'
import { hardHotelObject } from '../../assets/HardCode'
import SelectPrice from '../SelectPrice'
import { ExtrasList } from '../ExtrasList'
import Divider from '@material-ui/core/Divider'
import { MyProvider, ProjectContext } from '../../providers/Provider'
import { searchResultsAmen } from '../../Helper/SearchResultsAmen'
import { getAmenitiesArray, getSmallPictures, removeDuplicates, getUnique } from '../../Helper/Helper'
import { masterLinkSmall } from '../../Helper/Constants'

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

export const HotelCardSearch = (props) => {
  const classes = useStyles()
  const { project, setProject } = useContext(ProjectContext)
  const [expanded, setExpanded] = useState(false)
  const [facilitiesArr, setFacilitiesArr] = useState(props.hotel.facilities)
  const imagesarray = props.hotel.images
  const amenitiesToMap = getAmenitiesArray(facilitiesArr, searchResultsAmen)
  const amenitiesToMap1 = getUnique(amenitiesToMap, 'name')

  const readyImages = useMemo(() => getSmallPictures(imagesarray, masterLinkSmall), [imagesarray])
  const stopRerendering = useMemo(() => {
    return <SearchResultsCarousel images={readyImages} />
  }, [1])

  return (
    <>

      <div className={classes.root}>
        <ExpansionPanel expanded={expanded} square={false}>
          <ExpansionPanelSummary

            expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)} />}
            aria-controls='panel1c-content'
            id='panel1c-header'
            className='bigDiv'

          >
            <div className={classes.column} id='cardImage'>
              {stopRerendering}

            </div>
            <div className='threeCon'>
              <Typography className={classes.secondaryHeading} id='typo'>{props.hotel.categoryCode.content}</Typography>
              <div className={classes.column} id='ament'>

                <ul style={{ listStyleType: 'none' }} id=' amentItems'> {amenitiesToMap1 && amenitiesToMap1.map((item, i) =>
                  <li key={i} item={item}>{item.icon}{item.name}  </li>
                )}
                </ul>
              </div>

              <div className='labelBar'>
                <p>{hardHotelObject.label.posh}</p>
                <Divider orientation='vertical' flexItem />
                <p>{props.hotel.address.content}</p>
                <Divider orientation='vertical' flexItem />
                <p>{props.hotel.city.content}</p>
              </div>
            </div>

            <div id='bookButton' className={classes.column} style={{ width: '170px' }}>
              <SelectPrice done={() => props.done()} hotel={props.hotel} />
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <ExtrasList />
            </div>
          </ExpansionPanelDetails>

        </ExpansionPanel>
      </div>
    </>
  )
}

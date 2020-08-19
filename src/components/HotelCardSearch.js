
import React, { useContext, useState, useMemo } from 'react'
import './HotelCardSearch.css'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { SearchResultsCarousel } from './SearchResultsCarousel'
import { hardHotelObject } from '../assets/HardCode'
import SelectPrice from './SelectPrice'
import { ExtrasList } from './ExtrasList'
import Divider from '@material-ui/core/Divider'
import { MyProvider, ProjectContext } from '../providers/Provider'
import { searchResultsAmen } from '../Helper/SearchResultsAmen'
import { getAmenitiesArray, getSmallPictures, removeDuplicates, getUnique, labelReturn, reviewSummaryReturn } from '../Helper/Helper'
import { masterLinkSmall } from '../Helper/Constants'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '2rem auto'
    // border: '1px solid blue'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold'
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

    flexBasis: '35.33%'

  },
  smallColumn: {
    flexBasis: '15%'
    // border: '1px solid blue'
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
  // console.log(readyImages, 'ready images')

  return (
    <>

      <div className={classes.root}>
        <ExpansionPanel className='searchCard' expanded={expanded} square={false}>
          <ExpansionPanelSummary

            expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)} />}
            aria-controls='panel1c-content'
            id='panel1c-header'

          >
            {/* first div  */}
            <div id='firstDiv' className={classes.column}>
              <SearchResultsCarousel images={readyImages} />

            </div>
            {/* secound div wrraper  */}
            <div id='secoundDivWrraper' className={classes.column}>
              {/* first inside div  */}
              <div className='firstDiv'>
                <Typography className={classes.secondaryHeading} id='typo'>{props.hotel.name.content}</Typography>
                <div style={{ FontSize: 14, marginBottom: 1 }}><p>{props.hotel.address.content.toLowerCase()}</p></div>
              </div>
              {/* secound inside div  */}
              <div className='secoundDiv'>
                <p style={{ fontSize: 14 }}>Amenities:</p>
                <ul className='secondDivList'>

                  {amenitiesToMap1 && amenitiesToMap1.map((item, i) =>
                    <li key={i} item={item}>{item.icon}{item.name}  </li>

                  )}
                </ul>
              </div>
              {/* third inside div  */}

              <div className='thirdDivInner'>

                <p>{labelReturn(props.hotel.categoryCode)}</p>
                <Divider orientation='vertical' flexItem />
                <p>{props.hotel.city.content.toLowerCase()}</p>
                <Divider orientation='vertical' flexItem />
                {props.hotel.reviews[0] && reviewSummaryReturn(props.hotel.reviews[0])}

              </div>
              {/* end of secound div wrraper  */}
            </div>

            {/* third div */}
            <div id='thirdDivOutside' className={classes.smallColumn}>
              <SelectPrice done={props.done} hotel={props.hotel} />
            </div>

            {/* ends here  */}
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.details}>

            <ExtrasList />

          </ExpansionPanelDetails>

        </ExpansionPanel>
      </div>
    </>
  )
}

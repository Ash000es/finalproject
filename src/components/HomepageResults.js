import React, { useState, useEffect, useContext } from 'react'
import { findCheapestHotel, handleHomePageSearch } from '../Helper/Helper'
import { MyProvider, ProjectContext } from '../providers/Provider'
import FirebaseContext from '../providers/Firebase'
import { fetchPopularDestData } from '../handlers/ApiHandler'
import { Redirect } from 'react-router'
import { Spinning } from './Spinner'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import barcelona from '../assets/barcelona.jpg'
import ibiza from '../assets/ibiza.jpg'
import lisbon from '../assets/lisbon.jpg'
import majorca from '../assets/majorca.jpg'
import monto3 from '../assets/monto3.jpg'
import santorini from '../assets/santorini.jpg'
import napoli from '../assets/napoli.jpg'
import menorca from '../assets/menorca.jpg'
import mykonos from '../assets/mykonos.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: (screenWidth) => (screenWidth < 992 ? 650 : 360),
    maxHeight: 280,
    margin: '1rem '
  },
  media: {
    maxHeight: 190,
    maxWidth: (screenWidth) => (screenWidth < 992 ? 650 : 320),
    borderRadius: 5
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',

    flexShrink: 1,
    margin: '1rem auto'
  },
  Button: {
    color: '#0088BC'
  },
  cardText: {
    maxheight: '4.375rem'
  },
  Popular: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'medium',
    margin: '1rem auto',
    fontSize: '1.2rem',
    padding: '0.0625rem',
    maxWidth: '100%',
    minWidth: 100,
    textDecoration: 'underline'
  }
})

const HomePageResults = (props) => {
  const screenWidth = props.width
  const classes = useStyles(screenWidth)
  const [desResults, setDesResults] = useState()
  const [redirect, setRedirect] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [popularCities, setPopularCities] = useState([
    { code: 'SAT' },
    { code: 'BCN' },
    { code: 'IBZ' },
    { code: 'LIS' },
    { code: 'PMI' },
    { code: 'MAH' },
    { code: 'MKS' },
    { code: 'NAP' },
    { code: 'TIV' }
  ])
  const popularImages = [
    santorini,
    barcelona,
    ibiza,
    lisbon,
    majorca,
    menorca,
    mykonos,
    napoli,
    monto3
  ]
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)

  const [state, setState] = useState({
    stay: {
      checkIn: '2021-05-15',
      checkOut: '2021-05-16'
    },
    occupancies: [
      {
        rooms: 1,
        adults: 1,
        children: 0
      }
    ],
    destination: {
      code: ''
    },
    reviews: [
      {
        type: 'TRIPADVISOR',
        minRate: 3,
        minReviewCount: 3
      }
    ]
  })

  // useEffect(() => {
  //   const fetchDestinations = async () => {
  //     const res1 = await handleHomePageSearch(popularCities[0], state)
  //     console.log(res1, 'ress')
  //     const res2 = await handleHomePageSearch(popularCities[1], state)
  //     console.log(res2, 'ress')
  //     const res3 = await handleHomePageSearch(popularCities[2], state)
  //     console.log(res3, 'ress')
  //     const res4 = await handleHomePageSearch(popularCities[3], state)
  //     console.log(res4, 'ress')
  //     const res5 = await handleHomePageSearch(popularCities[4], state)
  //     console.log(res5, 'ress')
  //     const res6 = await handleHomePageSearch(popularCities[5], state)
  //     console.log(res6, 'ress')
  //     const res7 = await handleHomePageSearch(popularCities[6], state)
  //     console.log(res7, 'ress')
  //     const res8 = await handleHomePageSearch(popularCities[7], state)
  //     console.log(res8, 'ress')
  //     const res9 = await handleHomePageSearch(popularCities[8], state)

  //     return [res1, res2, res3, res4, res5, res6, res7, res8, res9]
  //   }
  //   fetchDestinations().then(destinationsResults => {
  //     setDesResults(destinationsResults)
  //   })
  // }, [])

  const handleClick = (des) => {
    setIsLoading(true)
    fetchPopularDestData(des, db)
      .then((hotelsProject) => {
        setProject({ ...project, results: hotelsProject })
      })
      .then(() => setIsLoading(false))
      .then(() => setRedirect(true))
    console.log(project, 'project')
  }
  if (redirect) {
    return <Redirect exact push to='/searchresults' />
  }

  return (
    <>
      <div className={classes.Popular}>
        <p>Popular destinations</p>
      </div>

      <div className={classes.container}>
        {isloading ? (
          <Spinning />
        ) : (
          <>
            {desResults &&
              desResults.map((des, i) => {
                const cheap = findCheapestHotel(des)
                return (
                  <Card className={classes.root} key={i} des={des} onClick={() => handleClick(des)}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        className={classes.media}
                        image={popularImages[i]}
                      />

                      <CardContent className={classes.cardText}>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {des[0].destinationName}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                          Stay from {cheap.minRate}$
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                )
              })}
          </>
        )}
      </div>
    </>
  )
}

export default HomePageResults

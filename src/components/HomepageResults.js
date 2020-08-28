import React, { useState, useEffect, useContext } from 'react'
import SearchBar from './SearchBar/SearchBar'
import { findCheapestHotel, handleHomePageSearch } from '../Helper/Helper'
import { MyProvider, ProjectContext } from '../providers/Provider'
import FirebaseContext from '../providers/Firebase'
import { fetchPopularDestData } from '../handlers/ApiHandler'
import { Redirect } from 'react-router'
import { Spinning } from './Spinner'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
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
    maxWidth: screenWidth =>
      screenWidth <= 768 ? '15rem' : '20rem',
    maxHeight: screenWidth =>
      screenWidth <= 768 ? '15rem' : '20rem',
    margin: '0.625rem auto',
    // backgroundColor: 'pink',
    width: screenWidth =>
      screenWidth <= 425 ? '25rem' : '20rem'

  },
  media: {
    maxHeight: screenWidth =>
      screenWidth <= 768 ? '10rem' : '12rem'

  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    // backgroundColor: 'yellow',
    flexShrink: 1

  },
  Popular: {
    borderBottom: '0.0625rem solid grey',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'medium',
    margin: '1rem auto',
    fontSize: '1.2rem',
    padding: '0.0625rem',
    maxWidth: 300,
    minWidth: 100
    // backgroundColor: 'pink'
  }

})

const HomePageResults = (props) => {
  const screenWidth = props.width
  const classes = useStyles(screenWidth)
  const [desResults, setDesResults] = useState()
  const [redirect, setRedirect] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [popularCities, setPopularCities] = useState([{ code: 'SAT' }, { code: 'BCN' }, { code: 'IBZ' }, { code: 'LIS' }, { code: 'PMI' }, { code: 'MAH' }, { code: 'MKS' }, { code: 'NAP' }, { code: 'TIV' }])
  const popularImages = [santorini, barcelona, ibiza, lisbon, majorca, menorca, mykonos, napoli, monto3]
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)

  const [state, setState] = useState(
    {

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
      reviews: [{
        type: 'TRIPADVISOR',
        minRate: 3,
        minReviewCount: 3
      }]

    }
  )

  const ALL_RESULTS = []

  // for (let i = 0; i < popularCities.length; i++) {
  //   const res = await handleHomePageSearch(popularCities[i], state)
  //   ALL_RESULTS.push(res)

  // }
  useEffect(() => {
    const fetchDestinations = async () => {
      const res1 = await handleHomePageSearch(popularCities[0], state)
      console.log(res1, 'ress')
      const res2 = await handleHomePageSearch(popularCities[1], state)
      console.log(res2, 'ress')
      const res3 = await handleHomePageSearch(popularCities[2], state)
      console.log(res3, 'ress')
      const res4 = await handleHomePageSearch(popularCities[3], state)
      console.log(res4, 'ress')
      const res5 = await handleHomePageSearch(popularCities[4], state)
      console.log(res5, 'ress')
      const res6 = await handleHomePageSearch(popularCities[5], state)
      console.log(res6, 'ress')
      const res7 = await handleHomePageSearch(popularCities[6], state)
      console.log(res7, 'ress')
      const res8 = await handleHomePageSearch(popularCities[7], state)
      console.log(res8, 'ress')
      const res9 = await handleHomePageSearch(popularCities[8], state)

      return [res1, res2, res3, res4, res5, res6, res7, res8, res9]
    }
    fetchDestinations().then(destinationsResults => {
      setDesResults(destinationsResults)
    })
  }, [])

  const handleClick = (des) => {
    setIsLoading(true)
    fetchPopularDestData(des, db)
      .then((hotelsProject) => {
        setProject(
          { ...project, results: hotelsProject }
        )
      }).then(() => setIsLoading(false)).then(() => setRedirect(true))
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

        {isloading ? <Spinning />
          : <>
            {
              desResults && desResults.map((des, i) => {
                const cheap = findCheapestHotel(des)
                return (

                  <Card className={classes.root} key={i} des={des} onClick={() => handleClick(des)}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        className={classes.media}
                        image={popularImages.map(image => image)}

                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {des[0].destinationName}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                          Hotels from {cheap.minRate}¢
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size='small' color='primary'>
                        Buy Now
                      </Button>
                      <Button size='small' color='primary'>
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                )
              })
            }
          </>}
      </div>
    </>

  )
}

export default HomePageResults

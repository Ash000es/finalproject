import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

export const SearchResultsHero = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='sm'>

      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='textPrimary'

        gutterBottom
      >
        Hotels
      </Typography>
      <div> <img

        src='/static/images/cards/paella.jpg'
      />
      </div>

      <Typography variant='h5' align='center' color='textSecondary' paragraph>
        Deal of the day
        Stay 3 nights and pay for 2 all inclusive at the Monty beach hotel
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify='center'>
          <Grid item>
            <Button variant='contained' color='primary'>
              Visit Ibiza
            </Button>
          </Grid>
          <Grid item>
            <p>360 euros</p>
            <Button variant='outlined' color='primary'>
              Book
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))
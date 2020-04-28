import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import SearchBar from '../SearchBar/SearchBar'
import Row from 'react-bootstrap/Row'

class HomePageResults extends React.Component {
  render () {
    return (
      <div className='cardsDeck'>
        <p>Popular destinations</p>

        <CardDeck>
          <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Card className='cardHomePage'>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>Madrid</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className='cardHomePage'>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>Barcelona</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className='cardHomePage'>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>Ibiza</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Row>
          <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Card className='cardHomePage'>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>Split</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className='cardHomePage'>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>Napoli</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className='cardHomePage'>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>Roheds</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Row>
          <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Card className='cardHomePage'>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>Corfu</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className='cardHomePage'>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>Lisbon</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className='cardHomePage'>
              <Card.Img variant='top' src='https://source.unsplash.com/random' />
              <Card.Body>
                <Card.Title>Porto</Card.Title>
                <Card.Text>
                  Hotels from 22$
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Row>
        </CardDeck>
      </div>
    )
  }
}

export default HomePageResults

// TODO: is this component being used? It's all hardcoded. Delete if not.

import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Container } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const ChangeDatesDiff = () => {
  return (

    // <Modal>
    <Container>
      <p>Good news! Your dates are available. Check your new dates of your stay below:</p>
      <br />
      <Card>
        <Card.Body>
          <Card.Title>Old details</Card.Title>
          <div>
            <Card.Subtitle className='mb-2 text-muted'>Check-in</Card.Subtitle><Divider orientation='vertical' flexItem /><Card.Text>Fri 4 Sept 2020</Card.Text>
          </div>
          <br />
          <div>

            <Card.Subtitle className='mb-2 text-muted'>Check-out</Card.Subtitle>
            <Divider orientation='vertical' flexItem />
            <Card.Text>Sun 6 Sept 2020</Card.Text>
          </div>
        </Card.Body>

      </Card>
      <Card>
        <Card.Body>
          <Card.Title>New details <br /><Divider orientation='vertical' flexItem /> <br />cost: 285$</Card.Title>
          <div>
            <Card.Subtitle className='mb-2 text-muted'>Check-in</Card.Subtitle>
            <Divider orientation='vertical' flexItem />
            <Card.Text>Fri 4 Sept 2020</Card.Text>
          </div>
          <br />
          <div>

            <Card.Subtitle className='mb-2 text-muted'>Check-out</Card.Subtitle>
            <Divider orientation='vertical' flexItem />
            <Card.Text>Sun 6 Sept 2020</Card.Text>
          </div>

        </Card.Body>

        <Card.Footer className='text-muted'><p>Refund due</p><p>20$</p></Card.Footer>
      </Card>
      <br />
      <p>Please be aware of any price differences. This may be due to different rates on different days of the</p>
    </Container>

  )
}; export default ChangeDatesDiff

import React from 'react'
import { Drawer, Button, IconButton, Paragraph, Icon } from 'rsuite'
import Typography from '@material-ui/core/Typography'

class CartDrawer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      size: 'sm',
      show: false
    }
    this.close = this.close.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  close () {
    this.setState({
      show: false
    })
  }

  toggleDrawer (placement) {
    this.setState({
      placement,
      show: true
    })
  }

  render () {
    const { size, placement, show } = this.state

    return (
      <div>

        <IconButton
          icon={<Icon icon='angle-left' />}
          onClick={() => this.toggleDrawer('right')}
        >
          Right
        </IconButton>

        <Drawer
          size={size}
          placement={placement}
          show={show}
          onHide={this.close}
        >
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Typography />
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={this.close} appearance='primary'>
              Confirm
            </Button>
            <Button onClick={this.close} appearance='subtle'>
              Cancel
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    )
  }
}; export default CartDrawer

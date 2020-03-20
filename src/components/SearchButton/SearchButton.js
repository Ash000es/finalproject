import React from 'react'

export class SearchButton extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const name = e.target.value
    this.props.onClick(name)
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        Search
      </button>
    )
  }
}

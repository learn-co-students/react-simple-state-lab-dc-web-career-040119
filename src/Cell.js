import React, { Component } from 'react'

export default class Welcome extends React.Component {
  constructor (props) {
    super(props)
    this.state = { color: props.value }
  }

  setToGray = () => {
    const gray = '#333'
    this.setState({ color: gray })
  }

  render () {
    return <div className="cell" style={{ backgroundColor: this.state.color }} onClick={this.setToGray}></div>
  }
}

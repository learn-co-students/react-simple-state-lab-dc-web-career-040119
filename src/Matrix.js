import React, { Component } from 'react'
import Cell from './Cell.js'

export default class Matrix extends Component {
  genRow = vals => vals.map(val => <Cell value={val} />)

  genMatrix = () =>
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)

  render () {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

const defaultValues = () => {
  const matrix = []
  for (let i = 0; i < 10; i++) {
    let row = []
    for (let j = 0; j < 10; j++) {
      row.push('#F00')
    }
    matrix.push(row)
  }
  return matrix
}

Matrix.defaultProps = {
  values: defaultValues()
}

import React from 'react'

export default class Cell extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      color : this.props.value
    }
  }

  handleClick = ()=>{
    console.log(this.props.value)
    this.setState({
      color : "#333"
    })
  }

  render(){
    return (
      <div className="cell"
      style= {{backgroundColor : this.state.color}}
      onClick={this.handleClick}>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
     super(props)
     this.state = {
       color: this.props.value
     }
   }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}
      // <div className="cell" style={{backgroundColor: '#FOO'}}
      // initial answer =^  Incorrect
      onClick={this.changeColor}
      />
    )
  }

  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }

}
//
// // +++++++++++++++++ solution
//
//
// import React, { Component } from 'react';
//
// export default class Cell extends Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       color: this.props.value
//     }
//   }
//
//   handleClick = () => {
//     this.setState({
//       color: '#333'
//     })
//   }
//
//   render() {
//     return (
//       <div
//         className="cell"
//         style={{backgroundColor: this.state.color}}
//         onClick={this.handleClick}>
//       </div>
//     )
//   }
//
// }

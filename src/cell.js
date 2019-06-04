import React, { Component } from 'react';

export default class Cell extends Component {
    
    constructor(props){
        
        super(props)
        this.state = {
            color: props.value
          }
    }
    colorChange=()=>{
        const newColor = '#333'
        this.setState({
            color: newColor
        })
        
    }

    render(){
        return (
            <div style={{backgroundColor: this.state.color}} onClick={this.colorChange}  className="cell">
         
            </div>
            
        )
    }


}


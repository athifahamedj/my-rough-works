import React, { Component } from 'react';

class Subscribe extends Component {

constructor(){

  super();

  this.state = {

    click:"no",
    Message:"not clicked"

  }

}

arrow =()=> {

  this.setState({

    click:"yes",
    Message:"clicked"


  })

}

render(){

  return <button onClick={this.arrow}><h1>{this.state.Message}</h1></button>;
}


}

export default Subscribe
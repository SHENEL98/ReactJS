import './App.css';
import NewComp from './NewComp';
import React,{ Component } from 'react';

class App extends Component{
  styles ={
    fontStyle: 'bold',
    color: 'teal',
  }

  render(){
    return(
      <div className='App'>
        <h1 style={this.styles}>Hello World</h1>
        <NewComp />
      </div>
    )
  }
}

export default App;

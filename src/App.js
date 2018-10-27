import React, { Component } from 'react';
import './App.css';
import Main from './main';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text:''
      };
    }
  render() {
    return <Main
    text={this.state.text}
    onClick={this.onClick.bind(this)}/>
  }  
  onClick () {
    alert('hello');

    this.setState({
      text:'$19.99'
    });
  }
}
export default App;
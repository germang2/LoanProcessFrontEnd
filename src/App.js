import './App.css';
import React, {Component } from 'react';
import Application from './components/Application/ApplicationView'

class App extends Component {

  componentDidMount() {

    sessionStorage.setItem("server_url", "http://localhost:8000");
    //sessionStorage.setItem("serverUrl", window.location.origin.toString()); //LOCAL  
}

  render() {
    return (
      <div className="App">
        <Application></Application>
      </div>
    );
  }
  
}

export default App;

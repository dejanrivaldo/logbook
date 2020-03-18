import React from 'react';
import './App.css';
import Header from './Header';
import Logbook from './Logbook';
import Particles from 'react-particles-js'

const particleOpt = {
  particles: {
    number: {
      value: 500,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}




class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Header/>
      <Logbook/>
     
      </div>
    );
  }
}

export default App;

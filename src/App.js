import React, { Component } from 'react';
import './App.css';
import MapContainer from './Map.js'
import Headline from './Headline.js'
import ListOrg from './ListOrg.js'

class App extends Component {
  render() {
    return (
        <div style={{height: '100%', width: '100%'}}>
        <Headline/>
        <MapContainer/>
        <ListOrg/>
        </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Headline from './Headline.js'
import ListOrg from './ListOrg.js'

class App extends Component {
  render() {
    return (
        <main style={{height: '100%', width: '100%'}}>
        <Headline/>
        <ListOrg/>
        </main>
    )
  }
}

export default App;

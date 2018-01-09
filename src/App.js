import React, { Component } from 'react';
import './App.css';
// import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header';
import SetupNewGame from './Components/SetupNewGame';
import Game from './Components/Game';
import Roll from './Components/Roll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ Header } />
        <Route exact path="/" component={ SetupNewGame } />
        <Route path="/game" component={ Game } />
        <Route path="/game/roll" component= { Roll } />
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import SplashPage from './Components/SplashPage';
import SetupNewGame from './Components/SetupNewGame';
import Game from './Components/Game';
import Roll from './Components/Roll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ SplashPage } />
        <Route path="/new-game" component={ SetupNewGame } />
        <Route exact path="/game" component={ Game } />
        <Route path="/game/roll" component= { Roll } />
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setPlayerCount } from '../actions';
import { setPlayers } from '../actions';
import Header from './Header';


class SetupNewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCount: this.props.setPlayerCount,
      players: this.props.setPlayers,
      availableColors: ['blue', 'green', 'orange', 'yellow']
    }
    this.chooseBlue1 = this.chooseBlue1.bind(this);
    this.chooseBlue2 = this.chooseBlue2.bind(this);
    this.chooseBlue3 = this.chooseBlue3.bind(this);
    this.chooseBlue4 = this.chooseBlue4.bind(this);
    this.chooseGreen1 = this.chooseGreen1.bind(this);
    this.chooseGreen2 = this.chooseGreen2.bind(this);
    this.chooseGreen3 = this.chooseGreen3.bind(this);
    this.chooseGreen4 = this.chooseGreen4.bind(this);
    this.chooseOrange1 = this.chooseOrange1.bind(this);
    this.chooseOrange2 = this.chooseOrange2.bind(this);
    this.chooseOrange3 = this.chooseOrange3.bind(this);
    this.chooseOrange4 = this.chooseOrange4.bind(this);
    this.chooseYellow1 = this.chooseYellow1.bind(this);
    this.chooseYellow2 = this.chooseYellow2.bind(this);
    this.chooseYellow3 = this.chooseYellow3.bind(this);
    this.chooseYellow4 = this.chooseYellow4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  choosePlayer1Color = () => {
    if (this.state.players[0].color !== null) {
      return (<label>Player 1 Color: {this.state.players[0].color}</label>)
    } else {
      return (
        <div>
          <label>Player 1 Color: </label>
          <button className='colorButtons' onClick={this.chooseBlue1}>blue</button>
          <button className='colorButtons' onClick={this.chooseGreen1}>green</button>
          <button className='colorButtons' onClick={this.chooseOrange1}>orange</button>
          <button className='colorButtons' onClick={this.chooseYellow1}>yellow</button>
        </div>
      );
    }
  };
  choosePlayer2Color = () => {
    if (this.state.players[1].color !== null) {
      return (<label>Player 2 Color: {this.state.players[1].color}</label>)
    } else {
      return (
        <div>
          <label>Player 2 Color: </label>
          <button className='colorButtons' onClick={this.chooseBlue2}>blue</button>
          <button className='colorButtons' onClick={this.chooseGreen2}>green</button>
          <button className='colorButtons' onClick={this.chooseOrange2}>orange</button>
          <button className='colorButtons' onClick={this.chooseYellow2}>yellow</button>
        </div>
      );
    }
  };
  choosePlayer3Color = () => {
    if (this.state.players[2]) {
      if (this.state.players[2].color !== null) {
        return (<label>Player 3 Color: {this.state.players[2].color}</label>)
      } else {
        return (
          <div>
            <label>Player 3 Color: </label>
            <button className='colorButtons' onClick={this.chooseBlue3}>blue</button>
            <button className='colorButtons' onClick={this.chooseGreen3}>green</button>
            <button className='colorButtons' onClick={this.chooseOrange3}>orange</button>
            <button className='colorButtons' onClick={this.chooseYellow3}>yellow</button>
          </div>
        );
      }
    }
  };
  choosePlayer4Color = () => {
    if (this.state.players[3]) {
      if (this.state.players[3].color !== null) {
        return (<label>Player 4 Color: {this.state.players[3].color}</label>)
      } else {
        return (
          <div>
            <label>Player 4 Color: </label>
            <button className='colorButtons' onClick={this.chooseBlue4}>blue</button>
            <button className='colorButtons' onClick={this.chooseGreen4}>green</button>
            <button className='colorButtons' onClick={this.chooseOrange4}>orange</button>
            <button className='colorButtons' onClick={this.chooseYellow4}>yellow</button>
          </div>
        );
      }
    }
  };

  chooseBlue1 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('blue')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'blue') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[0].color = 'blue';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseBlue2 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('blue')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'blue') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[1].color = 'blue';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseBlue3 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('blue')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'blue') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[2].color = 'blue';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseBlue4 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('blue')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'blue') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[3].color = 'blue';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }

  chooseGreen1 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('green')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'green') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[0].color = 'green';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseGreen2 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('green')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'green') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[1].color = 'green';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseGreen3 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('green')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'green') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[2].color = 'green';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseGreen4 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('green')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'green') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[3].color = 'green';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }

  chooseOrange1 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('orange')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'orange') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[0].color = 'orange';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseOrange2 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('orange')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'orange') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[1].color = 'orange';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseOrange3 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('orange')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'orange') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[2].color = 'orange';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseOrange4 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('orange')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'orange') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[3].color = 'orange';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }

  chooseYellow1 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('yellow')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'yellow') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[0].color = 'yellow';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseYellow2 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('yellow')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'yellow') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[1].color = 'yellow';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseYellow3 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('yellow')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'yellow') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[2].color = 'yellow';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }
  chooseYellow4 (event) {
    event.preventDefault();
    const colors = this.state.availableColors;
    if (colors.includes('yellow')){
      for (let i = 0; i < colors.length; i++) {
        if (colors[i] === 'yellow') colors.splice(i, 1);
      }
      const newPlayersArray = this.state.players;
      newPlayersArray[3].color = 'yellow';
      this.setState({
        availableColors: colors,
        players: newPlayersArray
      });
    } else {
      alert('Must choose a unique color per player!');
    }
  }

  addPlayer = () => {
    if (this.state.playerCount < 4) {
      const newPlayerCount = this.state.playerCount + 1;
      const newPlayersArray = this.state.players;
      newPlayersArray.push({name: 'Player ' + newPlayerCount, color: null});
      this.setState({
        playerCount: newPlayerCount,
        players: newPlayersArray
      })
    }
  }

  removePlayer = () => {
    if (this.state.playerCount > 2) {
      const newPlayersArray = this.state.players;
      const colors = this.state.availableColors;
      if (newPlayersArray[newPlayersArray.length - 1].color) {
        const color = newPlayersArray[newPlayersArray.length - 1].color;
        colors.push(color);
      }
      newPlayersArray.pop();
      this.setState({
        playerCount: this.state.playerCount - 1,
        players: newPlayersArray,
        availableColors: colors
      })
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.sendPlayerCount(this.state.playerCount);
    this.props.setPlayerColors(this.state.players);
    let playersWithoutColors = 0;
    this.state.players.forEach((player)=> {
      if (!player.color) playersWithoutColors++;
    });
    if (playersWithoutColors) {
      alert('Please choose a color for every player!');
    } else {
      this.props.history.push('/game');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <hr/>
        <form onSubmit={this.handleSubmit}>
          {this.choosePlayer1Color()}
          {this.choosePlayer2Color()}
          {this.choosePlayer3Color()}
          {this.choosePlayer4Color()}
          <br/>
          <button type='button' onClick={this.addPlayer}>+</button>
          <button type='button' onClick={this.removePlayer}>-</button>
          <br/>
          <br/>
          <input type='submit' value='Start Game' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setPlayerCount: state.playerCount,
    setPlayers: state.players,
  };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      sendPlayerCount: setPlayerCount,
      setPlayerColors: setPlayers
    }, dispatch)
  }
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SetupNewGame));

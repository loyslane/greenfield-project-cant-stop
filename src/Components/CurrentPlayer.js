import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CSS/CurrentPlayer.css';

class CurrentPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerColor: this.props.setCurrentPlayerColor
    }
  }

  showPlayerMarker= (color) => {
    if (color === 'blue') return <img className='player-marker' src={require('../images/blue.png')} alt='blue-marker' />;
    if (color === 'green') return <img className='player-marker' src={require('../images/green.png')} alt='green-marker' />;
    if (color === 'orange') return <img className='player-marker' src={require('../images/orange.png')} alt='orange-marker' />;
    if (color === 'yellow') return <img className='player-marker' src={require('../images/yellow.png')} alt='yellow-marker' />;
  }

  render() {
    return (
      <div>
        <h3 className='current-player'>
          Current player:
          &nbsp;&nbsp;
          {this.showPlayerMarker(this.state.currentPlayerColor)}
          &nbsp;&nbsp;
          {this.state.currentPlayerColor}
          &nbsp;&nbsp;
          {this.showPlayerMarker(this.state.currentPlayerColor)}
        </h3>
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setCurrentPlayerColor: state.currentPlayerColor
  };
};

export default connect(mapStateToProps,null)(CurrentPlayer);
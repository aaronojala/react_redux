import React, { Component } from 'react';
import './Clicker.css'

class Clicker extends Component {
  state = {
    likes: 0,
  };

  addHandler = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  removeHandler = () => {
    this.setState({
      likes: this.state.likes===0 ? 0 : this.state.likes -1
    });
  };

  resetHandler = () => {
    this.setState({
      likes: 0
    });
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Number of likes: {this.state.likes}</h1>
        </div>
        <div className="buttons">
          <button onClick={this.addHandler}>Add like</button>
          <button onClick={this.removeHandler}>Remove like</button>
          <button onClick={this.resetHandler}>Reset counter</button>
        </div>
      </div>
    );
  }
}

export default Clicker;
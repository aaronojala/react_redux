import React, { Component } from 'react';
import './Clicker.css'
import {connect} from 'react-redux';
import * as actionType from './actions/actions';

class Clicker extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Number of likes: {this.props.ctr}</h1>
        </div>
        <div className="buttons">
          <button onClick={this.props.onIncCounter}>Add like</button>
          <button onClick={this.props.onDecCounter}>Remove like</button>
          <button onClick={this.props.reset}>Reset counter</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter, // ctr = counter lyhennys
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecCounter: () => dispatch({type: actionType.DECREASE}),
        reset: () => dispatch({type: actionType.RESET})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
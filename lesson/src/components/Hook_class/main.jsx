import React, { Component } from 'react'
import './style.css'

export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div className="community">
          <span className="clock">{this.state.count}</span>
          <button onClick={() => this.setState({ count: this.state.count + 1 })} className="clickme">
            Click me
          </button>
        </div>
      );
    }
  }
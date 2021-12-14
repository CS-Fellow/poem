import React, { Component } from 'react';
import Days from './day.js';

class Journals extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Title: {this.state.title}</h1>
        <div>My Poem:{this.state.poem}</div>
        <button>Take me back to homepage</button>
      </div>
    );
  }
}

export default Journals;

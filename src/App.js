/** @format */

import React, { Component } from 'react';
import Days from './components/Day.js';
import Entry from './components/Entry.js';
import { useState, useEffect } from 'react';
// import './styles.css';

const App = () => {
  let [state, setState] = useState({
    poem: '',
  });
  return (
    <div>
      <h1>National Poetry Month</h1>
      <Days />
      <h1>Love this poem: {state.poem}</h1>
    </div>
  );
};

export default App;

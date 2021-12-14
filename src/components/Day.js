/** @format */

import React, { Component } from 'react';
import Entry from './Entry.js';

// class Days extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const days = [];
//     for (let i = 1; i < 31; i++) {
//       days.push(<Entry key={i} className='day' aprildate={i} />);
//     }
//     return <div>{days}</div>;
//   }
// }

const Days = () => {
  const days = [];
  for (let i = 1; i < 31; i++) {
    days.push(<Entry key={i} className='day' aprildate={i} />);
  }
  return <div>{days}</div>;
};

export default Days;

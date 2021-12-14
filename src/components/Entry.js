/** @format */

import React, { Component, useState } from 'react';
// import { render } from '../server/server';

const Entry = (props) => {
  console.log(props);
  return (
    <button
      className='entry'
      // aprildate={this.props.aprildate}
      // onClick={() => this.getEntry}
    >
      April
    </button>
  );
};

export default Entry;

// const getEntry = (props) => {
//   fetch(`/api/${this.props.aprildate}`)
//     .then((res) => res.json())
//     .then((data) => {
//       const { poem_body } = data.poem;
//       const { title } = data.title;
//       console.log(poem_body);
//       console.log(title);
//       this.setState({
//         title: title,
//         poem: poem_body,
//       });
//     })
//     .catch((err) => console.log('Entry.getEntry - ERROR: ', err));
// };

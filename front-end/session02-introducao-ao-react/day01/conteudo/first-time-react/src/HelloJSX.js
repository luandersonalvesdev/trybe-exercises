import React, { Component } from 'react';

const textJSX = 'Hello, JSX'

class HelloJSX extends Component {
  render() {
    return <h1>{ textJSX }</h1>
  }
}

export default HelloJSX;
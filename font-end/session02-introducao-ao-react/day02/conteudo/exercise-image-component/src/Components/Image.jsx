import React from "react";
import './Image.css';

export default class Image extends React.Component {
  render() {
    const { src, alt } = this.props;
    return <img src={ src } alt={ alt } />
  }
}
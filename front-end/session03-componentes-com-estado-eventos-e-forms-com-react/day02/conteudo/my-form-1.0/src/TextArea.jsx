import React, { Component } from 'react';

export default class TextArea extends Component {
  render() {
    const { handleChange } = this.props;
    return(
      <div>
        <label htmlFor="textArea">Considerações finais:</label>
        <textarea onChange={ handleChange } name="textArea" id="textArea" cols="30" rows="10"></textarea>
      </div>
    );
  }
}
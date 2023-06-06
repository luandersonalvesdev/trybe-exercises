import React, { Component } from 'react';
import TextArea from './TextArea';

export default class Form extends Component {

  state = {
    textArea: '',
  }

  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState(() => ({
      [name]: value,
    }))
  }
  render() {
    const { textArea } = this.state;

    const requi = textArea < 1 ? false : true

    return (
      <>
        <h1>Formulário:</h1>
        <form action="GET">
          <label htmlFor="fruit">
            <select onChange={ this.handleChange } name="fruit" id="fruit">
              <option value="apple">Apple</option>
              <option value="orange">Orange</option>
            </select>
          </label>

          <label htmlFor="login">Login</label>
          <input onChange={ this.handleChange } name='login' type="text" placeholder='login' id='login' />

          <label htmlFor="password">Password</label>
          <input onChange={ this.handleChange } name='password' type="password" placeholder='password' id='password'/>

          <label htmlFor="remember">Lembrar?</label>
          <input onChange={ this.handleChange } name='remember' type="checkbox" id='remember' />

          <TextArea handleChange={this.handleChange}/>
          <button disabled={ !requi }> Enviar </button>
        </form>
      </>
    )
  }
}
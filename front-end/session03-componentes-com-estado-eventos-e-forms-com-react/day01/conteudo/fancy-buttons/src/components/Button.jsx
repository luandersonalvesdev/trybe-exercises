import React, { Component } from 'react';



export default class ButtonOne extends Component {

  constructor() {
    super();

    this.buttonOne = this.buttonOne.bind(this);
    this.buttonTwo = this.buttonTwo.bind(this);
    this.buttonThree = this.buttonThree.bind(this);

    this.state = {
      btnOne: 0,
      btnTwo: 0,
      btnThree: 0,
    };
  }

  getBtnColor(num) {
    return num % 2 === 0 ? 'green' : '';
  }

  buttonOne = () => {
    this.setState((oldState) => {
      return {
        btnOne: oldState.btnOne + 1,
      }
    }, () => {
      console.log(this.getBtnColor(this.state.btnOne));
    });
  }

  buttonTwo = () => {
    this.setState({
      btnTwo: this.state.btnTwo + 1,
    })
  }

  buttonThree = () => {
    this.setState((oldState) => ({
      btnThree: oldState.btnThree + 1,
    }))
  }

  render() {

    const { btnOne, btnTwo, btnThree } = this.state;

    return (
      <>
        <button 
          style={{backgroundColor: this.getBtnColor(btnOne)}} 
          onClick={this.buttonOne}>{btnOne}
        </button>

        <button 
          onClick={this.buttonTwo}>{btnTwo}
        </button>

        <button 
          onClick={this.buttonThree}>{btnThree}
        </button>
      </>
    );
  }
}
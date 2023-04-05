import './App.css';
import { connect } from 'react-redux';
import { changeNumberAction } from './redux/actions/changeNumber.action';
import { changeColorAction } from './redux/actions/changeColor.action';
import React from 'react';

class App extends React.Component {
  state = {
    number: 0,
  }
  handleChange = ({ target }) => {
    const value = target.value;
    this.setState(() => ({
      [target.name]: value,
    }));
  }

  render() {
    const { currentNumState, currentColorState, changeNumber, changeColor } = this.props;
    const { number } = this.state;
    return (
      <div className="App">
        <h1>Mude a cor e o número</h1>
        <h2 style={{color: currentColorState }}>{ currentNumState }</h2>
        <button onClick={() => changeNumber(number) }>Número</button>
        <input type="number" name="number" onChange={this.handleChange}/>
        <button onClick={() => changeColor()}>Cor</button>
      </div>
    );
  }
}

const mapStateToProps = (globalStore) => ({
  currentNumState: globalStore.changeNumberReducer.currentNumber,
  currentColorState: globalStore.changeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({
  changeNumber: (number) => dispatch(changeNumberAction(number)),
  changeColor: () => dispatch(changeColorAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

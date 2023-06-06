import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import CardChar from './components/CardChar';
import { searchCharacterFetch } from './redux/actions/charactersFetch.action';

class App extends React.Component {
  state = {
    charInput: '',
  }

  handleChange = ({target}) => {
    this.setState(() => ({
      [target.name]: target.value,
    }));
  }

  render() {
    const { isLoading, searchCharacter } = this.props;
    const { charInput } = this.state;
    return (
      <div className="App">
        <h1>GAME OF THUNK</h1>
        <h4>Busque por um personagem de GOT</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <input  name="charInput" onChange={ this.handleChange } />
          </label>
          <button onClick={() => { searchCharacter(charInput) }}>Pesquisar</button>
        </form>
        {
          isLoading
            ? <span>Carregando...</span>
            : (
            <CardChar />
            )
        }
      </div>
    );
  }
}

const mapStateToProps = ({charactersReducer}) => ({
  isLoading: charactersReducer.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  searchCharacter: (charInput) => dispatch(searchCharacterFetch(charInput)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
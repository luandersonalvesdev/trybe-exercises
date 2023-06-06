import React, { Component } from "react";
import { connect } from "react-redux";

class CardChar extends Component {
  render() {
    const { nameChar, seasonsAppear, errorMessage, playedBy } = this.props;
    return(
      <>
      {
        !nameChar.length
          ? <span>{errorMessage}</span>
          : (
            <>
              <p>Nome: { nameChar }</p>
              <p>Ator/Atriz: { playedBy }</p>
              {
                seasonsAppear.map((season, i) => <p key={ i }>{season}</p> )
              }
            </>
          )
      }
      </>
    )
  }
}

const mapStateToProps = ({charactersReducer}) => ({
  nameChar: charactersReducer.name,
  seasonsAppear: charactersReducer.seasonsAppear,
  errorMessage: charactersReducer.errorMessage,
  playedBy: charactersReducer.playedBy,
});

export default connect(mapStateToProps)(CardChar);
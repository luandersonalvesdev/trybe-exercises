import React from "react";

class WithClasse extends React.Component {
  render() {
    console.log(this.props);
    return <h1>Hello, world! (com classe)</h1>
  }
}

export default WithClasse;

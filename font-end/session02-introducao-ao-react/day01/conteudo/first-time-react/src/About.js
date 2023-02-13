import React from 'react';


const fMyList = () => {
  return (
    <ul>
      <li>{Math.round(Math.random() * 10)}</li>
      <li>{Math.round(Math.random() * 10)}</li>
      <li>{Math.round(Math.random() * 10)}</li>
    </ul>
  )
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Luanderson</h1>
        <p>Eu sou assim</p>
        <section>
          <h2> My Habilities</h2>
          {fMyList()}
        </section>
      </div>
    )
  }
}

export default About
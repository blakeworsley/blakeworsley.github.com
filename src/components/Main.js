import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <section className={`Main ${this.props.navActivated ? 'Main-active' : null}`}>
        <h1>Main</h1>
      </section>
    );
  }
}

export default Main;

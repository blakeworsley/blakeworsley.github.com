import React, { Component } from 'react';
import Tiles from './Tiles';

class About extends Component {
  render() {
    const { activateHome } = this.props;
    return (
      <section className='component-full-screen'>
        <header className='component-full-screen-header' onClick={() => {activateHome()}}>
          <img src='./img/arrow.svg' className='back-to-home' role='presentation'/>
          BACK
        </header>
        <section className='component-full-screen-content'>
          <Tiles />
        </section>
      </section>
    );
  }
}

export default About;

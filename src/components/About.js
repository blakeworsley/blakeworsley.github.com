import React, { Component } from 'react';

class About extends Component {
  render() {
    const { activateHome, activateAbout, aboutActivated } = this.props;
    return (
      <section className='About'>
        <header className='about-header' onClick={() => {activateHome()}}>
          <img src='./img/arrow.svg' className='back-to-home' role='presentation'/>
          BACK
        </header>
        <section className='about-content'>
          <h1>MY NAME IS BLAKE</h1>
        </section>
      </section>
    );
  }
}

export default About;

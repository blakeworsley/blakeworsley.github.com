import React, { Component } from 'react';

class About extends Component {
  render() {
    const { activateHome, activateAbout, aboutActivated } = this.props
    return (
      <section className='About'>
        {aboutActivated ?
          <section>
            <header className='about-header'>
              <img src='./img/arrow.svg' className='back-to-home' role='presentation'
              onClick={() => {activateHome()}} />
              ABOUT
            </header>
            <h1>MY NAME IS BLAKE</h1>
          </section>
          :
          <h1 onClick={() => {activateAbout()}}>ABOUT</h1>
        }
      </section>
    );
  }
}

export default About;

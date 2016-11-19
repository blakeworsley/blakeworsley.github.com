import React, { Component } from 'react';
import Projects from './Projects';
import Start from './Start';
import About from './About';

class Main extends Component {

  render() {
    return (
      <section className={`Main ${this.props.navActivated ? 'Main-active' : null}`}>
        {this.props.navActivated ?
          <div className='main-fade-out'
            onClick={() => {this.props.activateNav()}}></div>
          :
          null
        }
        <section className='main-container'>
          <Start />
          <Projects />
          <About />
          {/* <img src='./img/logo-art.svg' role='presentation'/> */}
        </section>
      </section>
    );
  }
}

export default Main;

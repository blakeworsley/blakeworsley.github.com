import React, { Component } from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Start from './Start';

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
          {/* <img src='./img/logo-art.svg' /> */}
        </section>
      </section>
    );
  }
}

export default Main;

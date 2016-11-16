import React, { Component } from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

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
          <h1>Main</h1>
        </section>
      </section>
    );
  }
}

export default Main;

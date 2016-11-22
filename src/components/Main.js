import React, { Component } from 'react';
import Projects from './Projects';
import Rows from './Rows';

class Main extends Component {

  render() {
    return (
      <section className={`Main ${this.props.navActivated ? 'Main-active' : null}`}>
        <section className='main-container'>
          {this.props.navActivated ?
            <div className='main-fade-out'
              onClick={() => {this.props.activateNav()}}></div>
            :
            null
          }
          <Rows />
          {/* <Projects /> */}
        </section>
      </section>
    );
  }
}

export default Main;

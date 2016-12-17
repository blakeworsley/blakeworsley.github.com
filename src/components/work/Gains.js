import React, { Component } from 'react';

class Gains extends Component {
  render() {
    return (
      <section className='computer-application'>
        <section className='project-live'>
          <a href='https://gains-43a31.firebaseapp.com/'>
            <div className='project-screenshot gains-screenshot'></div>      
          </a>
        </section>
        <section className='project-code'>
          <a href='https://github.com/sikemausa/Gains'>              
            <h4 className='project-header'>Gains</h4>
            <p className='project-content'>
              Specifically built to track goals on a weekly basis and see improvement over time.
            </p>
          </a>
        </section>
      </section>
    );
  }
}

export default Gains;

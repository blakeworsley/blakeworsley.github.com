import React, { Component } from 'react';

class Blue extends Component {
  render() {
    return (
      <section className='computer-application'>
        <div className='project-screenshot'></div>      
        <h4 className='project-header'>Blue Coach</h4>
        <p className='project-content'>
          Designed to help swimmers communicate with their Coaches to
          prevent overtraining. This is the Coach Dashboard version of the website
        </p>
      </section>
    );
  }
}

export default Blue;

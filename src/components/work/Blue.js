import React, { Component } from 'react';

class Blue extends Component {
  render() {
    const { closeWindow } = this.props;
    return (
      <div className='computer-browser'>
        <nav>
          <div className='computer-browser-nav-button nav-red-button'
            onClick={() => closeWindow()}></div>
          <div className='computer-browser-nav-button nav-yellow-button'></div>
          <div className='computer-browser-nav-button nav-green-button'></div>
        </nav>
        <section className='computer-application'>
          <h1 className='project-header'>Blue Coach</h1>
          <p className='project-content'>
            Designed to help swimmers communicate with their Coaches to
            prevent overtraining. This is the Coach Dashboard version of the website
          </p>
        </section>
      </div>
    );
  }
}

export default Blue;

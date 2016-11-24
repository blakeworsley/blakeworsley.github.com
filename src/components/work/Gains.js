import React, { Component } from 'react';

class Gains extends Component {
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
          <h1 className='project-header'>Gains</h1>
          <p className='project-content'>
            Gains App. About getting your gains in life!!!
          </p>
        </section>
      </div>
    );
  }
}

export default Gains;

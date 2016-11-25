import React, { Component } from 'react';

class Gains extends Component {
  render() {
    const { closeWindow, computerFullscreenActivated, fullscreenActivated, computerWindowMinimized, minimizeWindow } = this.props;
    return (
      <div className={`computer-browser ${computerFullscreenActivated ? 'computer-browser-fullscreen' : ''} ${computerWindowMinimized ? 'computer-browser-minimize' : ''}`}>
        <nav>
          <div className='computer-browser-nav-button nav-red-button'
            onClick={() => closeWindow()}></div>
          <div className='computer-browser-nav-button nav-yellow-button'
            onClick={() => minimizeWindow()}></div>
          <div className='computer-browser-nav-button nav-green-button'
            onClick={() => fullscreenActivated()}></div>
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

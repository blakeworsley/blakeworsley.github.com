import React, { Component } from 'react';
import Blue from './work/Blue';
import Gains from './work/Gains';

class ComputerScreen extends Component {
  constructor() {
    super();
    this.state = {
      blueActivated: false,
      gainsActivated: false,
      rememberActivated: false,
      portfolioActivated: false,
      computerFullscreenActivated: false,
      computerWindowMinimized: false,
    };
  }

  closeWindow(){
    this.setState({
      blueActivated: false,
      gainsActivated: false,
    });
  }
  fullscreenActivated() {
    this.state.computerFullscreenActivated ?
    this.setState({computerFullscreenActivated: false}) :
    this.setState({computerFullscreenActivated: true});
  }
  minimizeWindow() {
    this.state.computerWindowMinimized ?
    this.setState({computerWindowMinimized: false}) :
    this.setState({computerWindowMinimized: true});
  }

  activateBlue(){
    this.state.computerWindowMinimized ? this.setState({computerWindowMinimized: false}) : null;
    this.state.gainsActivated ? this.setState({gainsActivated: false}) : null;
    this.state.blueActivated ?
    this.setState({blueActivated: false}) :
    this.setState({blueActivated: true});
  }

  activateGains(){
    this.state.blueActivated ? this.setState({blueActivated: false}) : null;
    this.state.gainsActivated ?
    this.setState({gainsActivated: false}) :
    this.setState({gainsActivated: true});
  }

  render() {
    const { computerFullscreenActivated, computerWindowMinimized,
       blueActivated, gainsActivated, rememberActivated, portfolioActivated } = this.state;
    return (
      <section className='computer-screen'>
        {blueActivated ? <Blue closeWindow={() => {this.closeWindow()}}
          computerFullscreenActivated={computerFullscreenActivated}
          fullscreenActivated={() => {this.fullscreenActivated()}}
          computerWindowMinimized={computerWindowMinimized}
          minimizeWindow={() => {this.minimizeWindow()}}
        /> : null}
        {gainsActivated ? <Gains closeWindow={() => {this.closeWindow()}}
          computerFullscreenActivated={computerFullscreenActivated}
          fullscreenActivated={() => {this.fullscreenActivated()}}
          computerWindowMinimized={computerWindowMinimized}
          minimizeWindow={() => {this.minimizeWindow()}}
        /> : null}
        <ul className='computer-app-selection'>
          <li onClick={() => this.activateBlue()}
            className={`computer-app-selection-li ${blueActivated ? 'computer-app-selection-selected' : null}`}
            >BLUE</li>
          <li
            className={`computer-app-selection-li ${rememberActivated ? 'computer-app-selection-selected' : null}`}
            >REMEMBER</li>
          <li onClick={() => this.activateGains()}
            className={`computer-app-selection-li ${gainsActivated ? 'computer-app-selection-selected' : null}`}
            >GAINS</li>
          <li
            className={`computer-app-selection-li ${portfolioActivated ? 'computer-app-selection-selected' : null}`}
            >PORTFOLIO</li>
        </ul>
      </section>
    );
  }
}

export default ComputerScreen;





          {/* <article className='project-card'>
            <h1 className='project-header'>Blue Coach</h1>
            <p className='project-content'>
              Designed to help swimmers communicate with their Coaches to
              prevent overtraining. This is the Coach Dashboard version of the website
            </p>
          </article>

          <article className='project-card'>
            <h1 className='project-header'>Gains</h1>
            <p className='project-content'>Information about the project goes here.</p>
          </article>

          <article className='project-card'>
            <h1 className='project-header'>Pomodoro App</h1>
            <p className='project-content'>Information about the project goes here.</p>
          </article>

          <article className='project-card'>
            <h1 className='project-header'>Ember Project</h1>
            <p className='project-content'>Information about the project goes here.</p>
          </article> */}

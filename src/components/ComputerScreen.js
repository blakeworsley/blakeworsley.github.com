import React, { Component } from 'react';
import Blue from './work/Blue';
import Gains from './work/Gains';

class ComputerScreen extends Component {
  constructor() {
    super();
    this.state = {
      blueActivated: false,
      gainsActivated: false,
    };
  }

  closeWindow(){
    this.setState({
      blueActivated: false,
      gainsActivated: false,
    });
  }

  activateBlue(){
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
    return (
      <section className='computer-screen'>
        {this.state.blueActivated ? <Blue closeWindow={() => {this.closeWindow()}}/> : null}
        {this.state.gainsActivated ? <Gains closeWindow={() => {this.closeWindow()}}/> : null}
        <ul className='computer-app-selection'>
          <li onClick={() => this.activateBlue()}>BLUE</li>
          <li>REMEMBER</li>
          <li>SHOOT THE BREEZE</li>
          <li onClick={() => this.activateGains()}>GAINS</li>
          <li>PORTFOLIO</li>
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

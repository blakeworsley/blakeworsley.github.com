import React, { Component } from 'react';

class ComputerScreen extends Component {
  render() {
    return (
      <section className='computer-screen'>
        <div className='computer-browser'>
          <nav>
            <div className='computer-browser-nav-button nav-red-button'></div>
            <div className='computer-browser-nav-button nav-yellow-button'></div>
            <div className='computer-browser-nav-button nav-green-button'></div>
          </nav>
          
        </div>
        <ul className='computer-app-selection'>
          <li>BLUE</li>
          <li>REMEMBER</li>
          <li>SHOOT THE BREEZE</li>
          <li>GAINS</li>
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

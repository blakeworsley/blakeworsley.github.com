import React, { Component } from 'react';

class Blue extends Component {
  render() {
    return (
      <section className='computer-application'>
        <section className='project-live'>
          <a href='https://blue-d8d04.firebaseapp.com/'>
            <div className='project-screenshot blue-screenshot'></div>      
          </a>
        </section>
        <section className='project-code'>
          <a href='https://github.com/blakeworsley/BlueCoach'>              
            <h4 className='project-header'>Blue Coach</h4>
            <p className='project-content'>
              Designed to help swimmers communicate with their Coaches to
              prevent overtraining. This is the Coach Dashboard version of the website
            </p>
          </a>
        </section>
      </section>
    );
  }
}

export default Blue;


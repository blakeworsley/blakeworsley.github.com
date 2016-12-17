import React, { Component } from 'react';

class Remember extends Component {
  render() {
    return (
      <section className='computer-application'>
        <section className='project-live'></section>
        <section className='project-code'>
        <a href='https://github.com/Casey1449/1606-remember-2'>        
          <h4 className='project-header'>Ember based Reminder App</h4>
          <p className='project-content'>
            The first attempt at an ember project was designed to improve our comfort with the platform while pracitcing professional git workflow.
            Feel free to check out the code here: Github
          </p>
        </a>
        </section>
      </section>
    );
  }
}

export default Remember;

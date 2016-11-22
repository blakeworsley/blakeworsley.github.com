import React, { Component } from 'react';
import Projects from './Projects';
import Rows from './Rows';

class Main extends Component {
  render() {
    const { navActivated, activateNav, aboutActivated,
      projectsActivated, contactActivated, activateAbout,
      activateProjects, activateContact } = this.props;
    return (
      <section className={`Main ${navActivated ? 'Main-active' : null}`}>
        <section className='main-container'>
          {navActivated ?
            <div className='main-fade-out'
              onClick={() => {activateNav()}}></div>
            :
            null
          }
          <Rows
            navActivated={navActivated}
            aboutActivated={aboutActivated}
            activateAbout={activateAbout}
            projectsActivated={projectsActivated}
            activateProjects={activateProjects}
            contactActivated={contactActivated}
            activateContact={activateContact}
          />
        </section>
      </section>
    );
  }
}

export default Main;

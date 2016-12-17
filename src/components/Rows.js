import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Rows extends Component {
  render() {
    const { aboutActivated, projectsActivated,
      contactActivated, activateAbout, activateProjects,
      activateContact, activateHome } = this.props;
    return (
      <section className='Rows'>

        <section className={`row row-1 ${aboutActivated ? 'row-active' : 'About-inactive'} ${(projectsActivated || contactActivated ) ? 'hide-row' : ''}`}>
          { (projectsActivated || contactActivated) ? null :
            ( aboutActivated ?
              <About
                aboutActivated={aboutActivated}
                activateAbout={activateAbout}
                activateHome={activateHome}
              />
              : <section onClick={() => {activateAbout()}} className='expandable-title'>
                <div className='row-hover-effect'><h1 className='category-title'>ABOUT</h1></div>
                </section>
            )
          }
        </section>

        <section className={`row row-2 ${projectsActivated ? 'row-active' : 'Projects-inactive'} ${(aboutActivated || contactActivated ) ? 'hide-row' : ''}`}>
          { (aboutActivated || contactActivated) ? null :
            ( projectsActivated ?
              <Projects
                projectsActivated={projectsActivated}
                activateProjects={activateProjects}
                activateHome={activateHome}
              />
              : <section onClick={() => {activateProjects()}} className='expandable-title'>
                  <div className='row-hover-effect'><h1 className='category-title'>PROJECTS</h1></div>
                </section>
            )
          }
        </section>

        <section className={`row row-3 ${contactActivated ? 'row-active' : 'Contact-inactive'} ${(aboutActivated || projectsActivated ) ? 'hide-row' : ''}`}>
           { (aboutActivated || projectsActivated) ? null :
            ( contactActivated ?
              <Contact
                contactActivated={contactActivated}
                activateContact={activateContact}
                activateHome={activateHome}
              />
              : <section onClick={() => {activateContact()}} className='expandable-title'>
                  <div className='row-hover-effect'><h1 className='category-title'>CONTACT</h1></div>
                </section>
            )
          }
        </section>
      </section>
    );
  }
}

export default Rows;

import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';

class Rows extends Component {
  render() {
    const { navActivated,
      aboutActivated, projectsActivated,
      contactActivated, activateAbout,
      activateProjects, activateContact } = this.props;
    return (
      <section className='Rows'>

        <section className={`row row-1 ${aboutActivated ? 'row-active' : 'About-inactive'} ${(projectsActivated || contactActivated ) ? 'hide-row' : ''}`}
          onClick={() => {activateAbout()}}>
          <About
            aboutActivated={aboutActivated}
            activateAbout={activateAbout}
          />
        </section>

        <section className={`row row-2 ${projectsActivated ? 'row-active' : 'Projects-inactive'} ${(aboutActivated || contactActivated ) ? 'hide-row' : ''}`}
          onClick={() => {activateProjects()}}>
          PROJECTS
          {/* <Projects
            projectsActivated={projectsActivated}
            activateProjects={activateProjects}
          /> */}
        </section>

        <section className={`row row-3 ${contactActivated ? 'row-active' : 'Contact-inactive'} ${(aboutActivated || projectsActivated ) ? 'hide-row' : ''}`}
          onClick={() => {activateContact()}}>
          CONTACT
          {/* <Contact
            contactActivated={contactActivated}
            activateContact={activateContact}
          /> */}
        </section>
      </section>
    );
  }
}

export default Rows;



// {aboutActivated ?
//   <section className='row row-1' onClick={() => {this.props.activateAbout()}}>
//     <About
//       aboutActivated={aboutActivated}
//       activateAbout={activateAbout}
//     />
//   </section>
// :
//   <section className='row row-1' onClick={() => {this.props.activateAbout()}}>
//     <About
//       aboutActivated={aboutActivated}
//       activateAbout={activateAbout}
//     />
//   </section>
// }

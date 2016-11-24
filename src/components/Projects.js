import React, { Component } from 'react';

class Projects extends Component {
  render() {
    const { activateHome } = this.props;
    return (
      <section className='component-full-screen'>
        <header className='component-full-screen-header' onClick={() => {activateHome()}}>
          <img src='./img/arrow.svg' className='back-to-home' role='presentation'/>
          BACK
        </header>
        <section className='Projects'>
          <article className='project-container project-1'><div className='project'>I</div></article>
          <article className='project-container project-1'><div className='project'>was</div></article>
          <article className='project-container project-1'><div className='project'>raised</div></article>
          <article className='project-container project-1'><div className='project'>in</div></article>

          <article className='project-container project-2'><div className='project'>Steamboat</div></article>
          <article className='project-container project-2'><div className='project'>Springs</div></article>
          <article className='project-container project-2'><div className='project'>Colorado</div></article>
          <article className='project-container project-2'><div className='project'>and</div></article>

          <article className='project-container project-3'><div className='project'>managed</div></article>
          <article className='project-container project-3'><div className='project'>to</div></article>
          <article className='project-container project-3'><div className='project'>survive</div></article>
          <article className='project-container project-3'><div className='project'>swimming</div></article>

          <article className='project-container project-4'><div className='project'>outside</div></article>
          <article className='project-container project-4'><div className='project'>during</div></article>
          <article className='project-container project-4'><div className='project'>harsh</div></article>
          <article className='project-container project-4'><div className='project'>winters</div></article>
        </section>
      </section>
    );
  }
}

export default Projects;

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
          <article className='project-container project-1'><div className='project'>Project 1</div></article>
          <article className='project-container project-1'><div className='project'>Project 1.2</div></article>
          <article className='project-container project-1'><div className='project'>Project 1.3</div></article>
          <article className='project-container project-1'><div className='project'>Project 1.4</div></article>

          <article className='project-container project-2'><div className='project'>Project 2</div></article>
          <article className='project-container project-2'><div className='project'>Project 2.2</div></article>
          <article className='project-container project-2'><div className='project'>Project 2.3</div></article>
          <article className='project-container project-2'><div className='project'>Project 2.4</div></article>

          <article className='project-container project-3'><div className='project'>Project 3</div></article>
          <article className='project-container project-3'><div className='project'>Project 3.2</div></article>
          <article className='project-container project-3'><div className='project'>Project 3.3</div></article>
          <article className='project-container project-3'><div className='project'>Project 3.4</div></article>

          <article className='project-container project-4'><div className='project'>Project 4</div></article>
          <article className='project-container project-4'><div className='project'>Project 4.2</div></article>
          <article className='project-container project-4'><div className='project'>Project 4.3</div></article>
          <article className='project-container project-4'><div className='project'>Project 4.4</div></article>
        </section>
      </section>
    );
  }
}

export default Projects;

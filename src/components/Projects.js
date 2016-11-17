import React, { Component } from 'react';

class Projects extends Component {

  render() {
    return (
      <section className='Projects'>
        <article className='project-container row-1'><div className='project'>Project 1</div></article>
        <article className='project-container row-1'><div className='project'>Project 1.2</div></article>
        <article className='project-container row-1'><div className='project'>Project 1.3</div></article>
        <article className='project-container row-1'><div className='project'>Project 1.4</div></article>

        <article className='project-container row-2'><div className='project'>Project 2</div></article>
        <article className='project-container row-2'><div className='project'>Project 2.2</div></article>
        <article className='project-container row-2'><div className='project'>Project 2.3</div></article>
        <article className='project-container row-2'><div className='project'>Project 2.4</div></article>

        <article className='project-container row-3'><div className='project'>Project 3</div></article>
        <article className='project-container row-3'><div className='project'>Project 3.2</div></article>
        <article className='project-container row-3'><div className='project'>Project 3.3</div></article>
        <article className='project-container row-3'><div className='project'>Project 3.4</div></article>

        <article className='project-container row-4'><div className='project'>Project 4</div></article>
        <article className='project-container row-4'><div className='project'>Project 4.2</div></article>
        <article className='project-container row-4'><div className='project'>Project 4.3</div></article>
        <article className='project-container row-4'><div className='project'>Project 4.4</div></article>
      </section>
    );
  }
}

export default Projects;

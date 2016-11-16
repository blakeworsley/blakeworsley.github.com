import React, { Component } from 'react';

class Projects extends Component {

  render() {
    return (
      <section className='Projects'>
        <article className='project-container row-1'>Project 1</article>
        <article className='project-container row-1'>Project 1.2</article>
        <article className='project-container row-1'>Project 1.3</article>
        <article className='project-container row-1'>Project 1.4</article>

        <article className='project-container row-2'>Project 2</article>
        <article className='project-container row-2'>Project 2.2</article>
        <article className='project-container row-2'>Project 2.3</article>
        <article className='project-container row-2'>Project 2.4</article>

        <article className='project-container row-3'>Project 3</article>
        <article className='project-container row-3'>Project 3.2</article>
        <article className='project-container row-3'>Project 3.3</article>
        <article className='project-container row-3'>Project 3.4</article>

        <article className='project-container row-4'>Project 4</article>
        <article className='project-container row-4'>Project 4.2</article>
        <article className='project-container row-4'>Project 4.3</article>
        <article className='project-container row-4'>Project 4.4</article>
      </section>
    );
  }
}

export default Projects;

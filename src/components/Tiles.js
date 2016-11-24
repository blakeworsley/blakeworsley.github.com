import React, { Component } from 'react';

class Tiles extends Component {
  render() {
    return (
      <section className='Tiles'>
        <article className='tile-container tile-1'><div className='tile'>I</div></article>
        <article className='tile-container tile-1'><div className='tile'>was</div></article>
        <article className='tile-container tile-1'><div className='tile'>raised</div></article>
        <article className='tile-container tile-1'><div className='tile'>in</div></article>

        <article className='tile-container tile-2'><div className='tile'>Steamboat</div></article>
        <article className='tile-container tile-2'><div className='tile'>Springs</div></article>
        <article className='tile-container tile-2'><div className='tile'>Colorado</div></article>
        <article className='tile-container tile-2'><div className='tile'>and</div></article>

        <article className='tile-container tile-3'><div className='tile'>managed</div></article>
        <article className='tile-container tile-3'><div className='tile'>to</div></article>
        <article className='tile-container tile-3'><div className='tile'>survive</div></article>
        <article className='tile-container tile-3'><div className='tile'>swimming</div></article>

        <article className='tile-container tile-4'><div className='tile'>outside</div></article>
        <article className='tile-container tile-4'><div className='tile'>during</div></article>
        <article className='tile-container tile-4'><div className='tile'>harsh</div></article>
        <article className='tile-container tile-4'><div className='tile'>winters</div></article>
      </section>
    );
  }
}

export default Tiles;

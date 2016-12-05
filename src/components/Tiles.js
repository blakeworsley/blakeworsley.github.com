import React, { Component } from 'react';

class Tiles extends Component {
  render() {
    return (
      <section className='Tiles'>
        <article className='tile-container tile-1'><div className='tile'>Swimmer</div></article>
        <article className='tile-container tile-1'><div className='tile'>Developer</div></article>
        <article className='tile-container tile-1'><div className='tile'>Artist</div></article>
        <article className='tile-container tile-1'><div className='tile'>Adventurer</div></article>

        <article className='tile-container tile-2'><div className='tile'>Denver</div></article>
        <article className='tile-container tile-2'><div className='tile'>Steamboat Springs</div></article>
        <article className='tile-container tile-2'><div className='tile'>Vancouver</div></article>
        <article className='tile-container tile-2'><div className='tile'>Toronto</div></article>

        <article className='tile-container tile-3'><div className='tile'>Skiing</div></article>
        <article className='tile-container tile-3'><div className='tile'>Gladiator</div></article>
        <article className='tile-container tile-3'><div className='tile'>Walking Dead</div></article>
        <article className='tile-container tile-3'><div className='tile'>Westworld</div></article>

        <article className='tile-container tile-4'><div className='tile'>outside</div></article>
        <article className='tile-container tile-4'><div className='tile'>during</div></article>
        <article className='tile-container tile-4'><div className='tile'>harsh</div></article>
        <article className='tile-container tile-4'><div className='tile'>winters</div></article>
      </section>
    );
  }
}

export default Tiles;

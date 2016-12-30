import React, { Component } from 'react';

class Tiles extends Component {
  render() {
    return (
      <section className='Tiles'>
        <article className='tile-container tile-1'><div className='tile'>Swimmer</div></article>
        <article className='tile-container tile-1'><div className='tile'>Developer</div></article>
        <article className='tile-container tile-1'><div className='tile'>Artist</div></article>
        <article className='tile-container tile-1'><div className='tile'>Olympian</div></article>

        <article className='tile-container tile-2'><div className='tile'>Denverite</div></article>
        <article className='tile-container tile-2'><div className='tile'>Steamboatian</div></article>
        <article className='tile-container tile-2'><div className='tile'>Vancouverman</div></article>
        <article className='tile-container tile-2'><div className='tile'>Torontonian</div></article>

        <article className='tile-container tile-3'><div className='tile'>Skier</div></article>
        <article className='tile-container tile-3'><div className='tile'>Designer</div></article>
        <article className='tile-container tile-3'><div className='tile'>Photoshopper</div></article>
        <article className='tile-container tile-3'><div className='tile'>Incliner</div></article>

        <article className='tile-container tile-4'><div className='tile'>American</div></article>
        <article className='tile-container tile-4'><div className='tile'>Adventurer</div></article>
        <article className='tile-container tile-4'><div className='tile'>Athlete</div></article>
        <article className='tile-container tile-4'><div className='tile'>Canadian</div></article>
      </section>
    );
  }
}

export default Tiles;

import React, { Component } from 'react';

class ColorPicker extends Component {
  render() {
    return (
      <section className='computer-application'>
        <section className='project-live'>
          <a href=''>
            <div className='project-screenshot blue-screenshot'></div>      
          </a>
        </section>
        <section className='project-code'>
          <a href='https://github.com/blakeworsley/electron-color'>              
            <h4 className='project-header'>Electron Color</h4>
            <p className='project-content'>
              Electron Based Color application that allows for selecting any color value on the screen.
            </p>
          </a>
        </section>
      </section>
    );
  }
}

export default ColorPicker;


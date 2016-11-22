import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className='Action'>
        {this.props.aboutActivated ?
          <section>
            <h1>MY NAME IS BLAKE</h1>
            <p>I like penguins</p>
          </section>
          :
          <h1>ABOUT</h1>
        }
      </section>
    );
  }
}

export default About;

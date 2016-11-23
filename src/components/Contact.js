import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { activateHome, activateContact, contactActivated } = this.props;
    return (
      <section className='component-full-screen'>
        <header className='component-full-screen-header' onClick={() => {activateHome()}}>
          <img src='./img/arrow.svg' className='back-to-home' role='presentation'/>
          BACK
        </header>
        <section className='component-full-screen-content'>
          <h1>CONTACT ME</h1>
        </section>
      </section>
    );
  }
}

export default Contact;

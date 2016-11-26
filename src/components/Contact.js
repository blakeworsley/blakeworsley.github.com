import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { activateHome } = this.props;
    return (
      <section className='component-full-screen'>
        <header className='component-full-screen-header' onClick={() => {activateHome()}}>
          <img src='./img/arrow.svg' className='back-to-home' role='presentation'/>
          BACK
        </header>
        <section className='component-full-screen-content'>
          <h1>CONTACT ME</h1>
          <form>
            <label>Your Email: <input type="text" /></label>
            <label>What do you want?: <input type="text" /></label>
            <a href='mailto:blakeworsley@gmail.com'><button>Send</button></a>
          </form>
        </section>
      </section>
    );
  }
}

export default Contact;

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
          <h2>CONTACT ME</h2>
          <form>
            <label><h4>Your Email: </h4><input type="text" placeholder='Email Address Here'/></label>
            <label><h4>What do you want?: </h4><input type="text" placeholder='What do you want from me?'/></label>
            <button>Submit</button>
          </form>
        </section>
      </section>
    );
  }
}

export default Contact;

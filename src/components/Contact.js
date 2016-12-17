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
          <form>
            <h2>CONTACT ME</h2>
            <label><h4>Your Email: </h4><input type="text" placeholder='Email Address Here'/></label>
            <label><h4>What do you want?: </h4><textarea type="text" placeholder='What do you want from me?'/></label>
            <br/>
            <button onClick={ (e) => e.preventDefault()}>Submit</button>
          </form>
        </section>
      </section>
    );
  }
}

export default Contact;

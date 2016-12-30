import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      message: null
    }
  }
  render() {
    const { activateHome } = this.props;
    return (
      <section className='component-full-screen'>
        <header className='component-full-screen-header' onClick={() => {activateHome()}}>
          <img src='./img/arrow.svg' className='back-to-home' role='presentation'/>
          BACK
        </header>
        <section className='component-full-screen-content component-full-screen-content-3'>
          <form action="https://formspree.io/blakeworsley@gmail.com"
            method="POST">
            <h2>CONTACT ME</h2>
            <label><h4>Your Name: </h4>
            <input name="name" type="text" placeholder='Your name here'
              value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </label>
            <label><h4>Your Email: </h4>
            <input name="_replyto" type="text" placeholder='Your email address here'
              value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
            </label>
            <label><h4>Message:</h4>
            <textarea name="message" type="text" placeholder='How can I help you?'
              value={this.state.message} onChange={(e) => this.setState({message: e.target.value})}/>
            </label>
            <br/>
            <input type="submit" value="Send" className='submit-button'
            disabled={!(this.state.name && this.state.email && this.state.message)} 
            />
          </form>
        </section>
      </section>
    );
  }
}

export default Contact;

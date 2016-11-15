import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className={`Header ${this.props.navActivated ? 'Header-active' : null}`}>
        <img src='./img/menu.svg' onClick={() => {this.props.activateNav()}} />
        {/* <h1 className="header-title">Front End Web Developer</h1> */}
      </section>
    );
  }
}

export default Header;

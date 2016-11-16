import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className={`Header ${this.props.navActivated ? 'Header-active' : null}`}>
        {this.props.navActivated ?
          <img src='./img/arrow.svg' className='navigationImg'
            onClick={() => {this.props.activateNav()}} />
          :
          <img src='./img/menu.svg' className='navigationImg'
            onClick={() => {this.props.activateNav()}} />
        }
        {this.props.navActivated ?
          <aside>
            <nav className='header-nav'>
              <h2>Projects<span>
                <img src='./img/arrow-right.svg' className='selectedArrow'/>
              </span></h2>
              <h2>About<span>
                <img src='./img/arrow-right.svg' className='selectedArrow'/>
              </span></h2>
              <h2>Contact<span>
                <img src='./img/arrow-right.svg' className='selectedArrow'/>
              </span></h2>
            </nav>
            <section className='header-bio'>
              <p>I am a front end web developer who was part fish in a previous life.</p>
              <p>Contact me below if you interested in some freelance web or design work.</p>
            </section>
            <img src='./img/logo.svg' className='header-logo'/>
          </aside>
          :
          <h1 className='header-title'>Blake Worsley
            <span className='header-title-span'>Front End Web Developer</span>
          </h1>

        }
      </section>
    );
  }
}

export default Header;

{/* <h1 className="header-title">Front End Web Developer</h1> */}

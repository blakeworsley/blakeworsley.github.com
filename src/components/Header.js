import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { activateNav, navActivated, aboutActivated, projectsActivated,
      contactActivated, activateAbout, activateProjects, activateContact } = this.props;
    return (
      <section className={`Header ${navActivated ? 'Header-active' : null}`}>
        {navActivated ?
          <img src='./img/arrow.svg' className='navigationImg' role='presentation'
            onClick={() => {activateNav()}} />
          :
          <img src='./img/menu.svg' className='navigationImg' role='presentation'
            onClick={() => {activateNav()}} />
        }
        {navActivated ?
          <aside>
            <nav className='header-nav'>
              <h2 onClick={() => {activateAbout()}}
                className={`${aboutActivated ? 'selected-nav' : 'unselected-nav'}`}>About<span>
                <img src='./img/arrow-right.svg' className='selectedArrow' role='presentation'/>
              </span></h2>
              <h2 onClick={() => {activateProjects()}}
                className={`${projectsActivated ? 'selected-nav' : 'unselected-nav'}`}>Projects<span>
                <img src='./img/arrow-right.svg' className='selectedArrow' role='presentation'/>
              </span></h2>
              <h2 onClick={() => {activateContact()}}
                className={`${contactActivated ? 'selected-nav' : 'unselected-nav'}`}>Contact<span>
                <img src='./img/arrow-right.svg' className='selectedArrow' role='presentation'/>
              </span></h2>
            </nav>
            <section className='header-bio'>
              <p>I am a front end web developer who was part fish in a previous life.</p>
              <p>Contact me below if you interested in some freelance web or design work.</p>
            </section>
            <img src='./img/logo.svg' className='header-logo' role='presentation'/>
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

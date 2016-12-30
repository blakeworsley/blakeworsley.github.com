import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { activateNav, navActivated, aboutActivated, projectsActivated,
      contactActivated, activateAbout, activateProjects, activateContact } = this.props;
    return (
      <section className={`Header ${navActivated ? 'Header-active' : ''} ${
        (aboutActivated || projectsActivated || contactActivated) ? 'minimize-header' : ''}`}>
        {navActivated ?
          <img src='./img/arrow.svg' className='navigationImg' role='presentation'
            onClick={() => {activateNav()}} />
          :
          <img src='./img/menu.svg' className='navigationImg' role='presentation'
            onClick={() => {activateNav()}} />
        }
        <h4 className={`header-title ${navActivated ? 'header-title-inactive' : ''}`}>
          Blake Worsley
          <span className='header-title-span'>Front End Web Developer</span>
        </h4>
        <aside className={`header-aside ${navActivated ? 'header-aside-active' : ''}`}>
          <nav className='header-nav'>
            <h4 onClick={() => {activateAbout()}}
              className={`${aboutActivated ? 'selected-nav' : 'unselected-nav'}`}>About<span>
              <img src='./img/arrow-right.svg' className='selectedArrow' role='presentation'/>
            </span></h4>
            <h4 onClick={() => {activateProjects()}}
              className={`${projectsActivated ? 'selected-nav' : 'unselected-nav'}`}>Projects<span>
              <img src='./img/arrow-right.svg' className='selectedArrow' role='presentation'/>
            </span></h4>
            <h4 onClick={() => {activateContact()}}
              className={`${contactActivated ? 'selected-nav' : 'unselected-nav'}`}>Contact<span>
              <img src='./img/arrow-right.svg' className='selectedArrow' role='presentation'/>
            </span></h4>
          </nav>
          <section className='header-bio'>
            <p className='social-icons'>
              <a href='http://codepen.io/blakeworsley/'><img src='./img/social/Codepen-black.svg' className='social-logo' role='presentation'/></a>
              <a href='https://github.com/blakeworsley'><img src='./img/social/Github-black.svg' className='social-logo' role='presentation'/></a>
              <a href='https://medium.com/@blakeworsley'><img src='./img/social/Medium-black.svg' className='social-logo' role='presentation'/></a>
              <a href='https://twitter.com/blakeworsley'><img src='./img/social/Twitter-black.svg' className='social-logo' role='presentation'/></a>
            </p>
            <p>I am a Front End Web Developer and former Olympic Swimmer</p>
            <p>Currently looking for web development and design work.</p>
            
          </section>
          <img src='./img/logo.svg' className='header-logo' role='presentation'/>
        </aside>
      </section>
    );
  }
}

export default Header;

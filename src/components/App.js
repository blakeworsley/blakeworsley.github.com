import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navActivated: false,
      aboutActivated: false,
      projectsActivated: false,
      contactActivated: false
    };
  }

  activateNav(){
    this.state.navActivated ?
    this.setState({navActivated: false}) :
    this.setState({navActivated: true});
  }

  activateAbout(){
    this.activateHome();
    this.state.aboutActivated ?
    this.setState({aboutActivated: false}) :
    this.setState({aboutActivated: true});
  }

  activateProjects(){
    this.activateHome();
    this.state.projectsActivated ?
    this.setState({projectsActivated: false}) :
    this.setState({projectsActivated: true});
  }

  activateContact(){
    this.activateHome();
    this.state.contactActivated ?
    this.setState({contactActivated: false}) :
    this.setState({contactActivated: true});
  }

  activateHome(){
    this.setState({
      navActivated: false,
      aboutActivated: false,
      projectsActivated: false,
      contactActivated: false
    });
  }

  render() {
    const { navActivated, aboutActivated, projectsActivated, contactActivated } = this.state;
    return (
      <div className={`App ${(aboutActivated || projectsActivated || contactActivated) ? 'component-active' : ''}`}>
        <Header activateNav={ () => this.activateNav()}
          navActivated={navActivated}
          aboutActivated={aboutActivated}
          activateAbout={() => this.activateAbout()}
          projectsActivated={projectsActivated}
          activateProjects={() => this.activateProjects()}
          contactActivated={contactActivated}
          activateContact={() => this.activateContact()}
        />
        <Main activateNav={ () => this.activateNav()}
          navActivated={navActivated}
          aboutActivated={aboutActivated}
          activateAbout={() => this.activateAbout()}
          projectsActivated={projectsActivated}
          activateProjects={() => this.activateProjects()}
          contactActivated={contactActivated}
          activateContact={() => this.activateContact()}
          activateHome={() => this.activateHome()}
        />
      </div>
    );
  }
}

export default App;

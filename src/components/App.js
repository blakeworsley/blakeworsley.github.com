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
    this.state.navActivated ? this.setState({navActivated: false}) : null;
    this.state.projectsActivated ? this.setState({projectsActivated: false}) : null;
    this.state.contactActivated ? this.setState({contactActivated: false}) : null;
    this.state.aboutActivated ?
    this.setState({aboutActivated: false}) :
    this.setState({aboutActivated: true});
  }

  activateProjects(){
    this.state.navActivated ? this.setState({navActivated: false}) : null;
    this.state.aboutActivated ? this.setState({aboutActivated: false}) : null;
    this.state.contactActivated ? this.setState({contactActivated: false}) : null;
    this.state.projectsActivated ?
    this.setState({projectsActivated: false}) :
    this.setState({projectsActivated: true});
  }

  activateContact(){
    this.state.navActivated ? this.setState({navActivated: false}) : null
    this.state.aboutActivated ? this.setState({aboutActivated: false}) : null
    this.state.projectsActivated ? this.setState({projectsActivated: false}) : null
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
    const { navActivated, aboutActivated, projectsActivated,
      contactActivated, activateAbout, activateProjects, activateContact } = this.state;
    return (
      <div className="App">
        <Header activateNav={ () => { this.activateNav() }}
          navActivated={navActivated}
          aboutActivated={aboutActivated}
          activateAbout={() => {this.activateAbout()}}
          projectsActivated={projectsActivated}
          activateProjects={() => {this.activateProjects()}}
          contactActivated={contactActivated}
          activateContact={() => {this.activateContact()}}
        />
        <Main activateNav={ () => { this.activateNav() }}
          navActivated={navActivated}
          aboutActivated={aboutActivated}
          activateAbout={() => {this.activateAbout()}}
          projectsActivated={projectsActivated}
          activateProjects={() => {this.activateProjects()}}
          contactActivated={contactActivated}
          activateContact={() => {this.activateContact()}}
          activateHome={() => {this.activateHome()}}
        />
      </div>
    );
  }
}

export default App;

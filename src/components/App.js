import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navActivated: false
    };
  }

  activateNav(){
    this.state.navActivated ?
    this.setState({navActivated: false}) :
    this.setState({navActivated: true})
  }

  render() {

    const { navActivated } = this.state;
    return (
      <div className="App">
        <Header activateNav={ () => { this.activateNav() }}
        navActivated={navActivated} />
        <Main activateNav={ () => { this.activateNav() }}
        navActivated={navActivated} />
      </div>
    );
  }
}

export default App;

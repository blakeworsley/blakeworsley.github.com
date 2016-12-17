import React, { Component } from 'react';
import Blue from './work/Blue';
import Remember from './work/Remember';
import Gains from './work/Gains';
import Portfolio from './work/Portfolio';

class ComputerScreen extends Component {
  constructor() {
    super();
    this.state = {
      blueActivated: false,
      gainsActivated: false,
      rememberActivated: false,
      portfolioActivated: false,
      computerFullscreenActivated: false,
      computerWindowMinimized: false,
    };
  }

  closeWindow(){
    this.setState({
      blueActivated: false,
      gainsActivated: false,
      rememberActivated: false,
      portfolioActivated: false,
      computerWindowMinimized: false
    });
  }
  fullscreenActivated() {
    this.state.computerFullscreenActivated ?
    this.setState({computerFullscreenActivated: false}) :
    this.setState({computerFullscreenActivated: true});
  }
  minimizeWindow() {
    this.state.computerWindowMinimized ?
    this.setState({computerWindowMinimized: false}) :
    this.setState({computerWindowMinimized: true});
  }

  activateBlue(){
    this.closeWindow();
    this.state.blueActivated ?
    this.setState({blueActivated: false, computerWindowMinimized: false}) :
    this.setState({blueActivated: true, computerWindowMinimized: false});
  }

  activateGains(){
    this.closeWindow();
    this.state.gainsActivated ?
    this.setState({gainsActivated: false, computerWindowMinimized: false}) :
    this.setState({gainsActivated: true, computerWindowMinimized: false});
  }

  activatePortfolio(){
    this.closeWindow();
    this.state.portfolioActivated ?
    this.setState({portfolioActivated: false, computerWindowMinimized: false}) :
    this.setState({portfolioActivated: true, computerWindowMinimized: false});
  }

  activateRemember(){
    this.closeWindow();
    this.state.rememberActivated ?
    this.setState({rememberActivated: false, computerWindowMinimized: false}) :
    this.setState({rememberActivated: true, computerWindowMinimized: false});
  }

  render() {
    const { computerFullscreenActivated, computerWindowMinimized,
       blueActivated, gainsActivated, rememberActivated, portfolioActivated } = this.state;
    return (
      <section className='computer-screen'>
        { (blueActivated || gainsActivated || rememberActivated || portfolioActivated) ?
          <div className={`computer-browser ${computerFullscreenActivated ? 'computer-browser-fullscreen' : ''} ${computerWindowMinimized ? 'computer-browser-minimize' : ''}`}>
            <nav>
              <div className='computer-browser-nav-button nav-red-button'
                onClick={() => this.closeWindow()}></div>
              <div className='computer-browser-nav-button nav-yellow-button'
                onClick={() => this.minimizeWindow()}></div>
              <div className='computer-browser-nav-button nav-green-button'
                onClick={() => this.fullscreenActivated()}></div>
            </nav>
              {blueActivated ? <Blue /> : null}
              {rememberActivated ? <Remember /> : null}
              {gainsActivated ? <Gains /> : null}
              {portfolioActivated ? <Portfolio /> : null}
          </div>
          : null
        }

        <ul className='computer-app-selection'>
          <li onClick={() => this.activateBlue()}
            className={`computer-app-selection-li ${blueActivated ? 'computer-app-selection-selected' : null}`}
            >BLUE</li>
          <li onClick={() => this.activateRemember()}
            className={`computer-app-selection-li ${rememberActivated ? 'computer-app-selection-selected' : null}`}
            >REMEMBER</li>
          <li onClick={() => this.activateGains()}
            className={`computer-app-selection-li ${gainsActivated ? 'computer-app-selection-selected' : null}`}
            >GAINS</li>
          <li onClick={() => this.activatePortfolio()}
            className={`computer-app-selection-li ${portfolioActivated ? 'computer-app-selection-selected' : null}`}
            >PORTFOLIO</li>
        </ul>
      </section>
    );
  }
}

export default ComputerScreen;

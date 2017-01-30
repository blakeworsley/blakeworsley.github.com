import React, { Component } from 'react';
import ColorPicker from './work/ColorPicker';
import Blue from './work/Blue';
import Remember from './work/Remember';
import Gains from './work/Gains';

class ComputerScreen extends Component {
  constructor() {
    super();
    this.state = {
      colorPickerActivated: false,
      blueActivated: false,
      gainsActivated: false,
      rememberActivated: false,
      computerFullscreenActivated: false,
      computerWindowMinimized: false,
    };
  }

  closeWindow(){
    this.setState({
      colorPickerActivated: false,
      blueActivated: false,
      gainsActivated: false,
      rememberActivated: false,
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

  activateWork(activeComponent){
    this.closeWindow();
    let activeState = {}
      activeState[activeComponent] = true;
      activeState.computerWindowMinimized = false;
    let inactiveState = {}
      inactiveState[activeComponent] = false;
      inactiveState.computerWindowMinimized = false;
    this.state[activeComponent] ?
    this.setState(inactiveState) :
    this.setState(activeState)
  }

  render() {
    const { computerFullscreenActivated, computerWindowMinimized, colorPickerActivated,
       blueActivated, gainsActivated, rememberActivated } = this.state;
    return (
      <section className='computer-screen'>
        { (colorPickerActivated || blueActivated || gainsActivated || rememberActivated) ?
          <div className={`computer-browser ${computerFullscreenActivated ? 'computer-browser-fullscreen' : ''} ${computerWindowMinimized ? 'computer-browser-minimize' : ''}`}>
            <nav>
              <div className='computer-browser-nav-button nav-red-button'
                onClick={() => this.closeWindow()}></div>
              <div className='computer-browser-nav-button nav-yellow-button'
                onClick={() => this.minimizeWindow()}></div>
              <div className='computer-browser-nav-button nav-green-button'
                onClick={() => this.fullscreenActivated()}></div>
            </nav>
              {colorPickerActivated ? <ColorPicker /> : null}
              {blueActivated ? <Blue /> : null}
              {rememberActivated ? <Remember /> : null}
              {gainsActivated ? <Gains /> : null}
          </div>
          : null
        }

        <ul className='computer-app-selection'>
          <li onClick={() => this.activateWork('colorPickerActivated')}
            className={`computer-app-selection-li ${colorPickerActivated ? 'computer-app-selection-selected' : null}`}
            >COLOR</li>
          <li onClick={() => this.activateWork('blueActivated')}
            className={`computer-app-selection-li ${blueActivated ? 'computer-app-selection-selected' : null}`}
            >BLUE</li>
          <li onClick={() => this.activateWork('rememberActivated')}
            className={`computer-app-selection-li ${rememberActivated ? 'computer-app-selection-selected' : null}`}
            >REMEMBER</li>
          <li onClick={() => this.activateWork('gainsActivated')}
            className={`computer-app-selection-li ${gainsActivated ? 'computer-app-selection-selected' : null}`}
            >GAINS</li>
        </ul>
      </section>
    );
  }
}

export default ComputerScreen;

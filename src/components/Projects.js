import React, { Component } from 'react';
import ComputerScreen from './ComputerScreen';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      computerOpen: true
    };
  }

  activateComputer(){
    this.state.computerOpen ?
    this.setState({computerOpen: false}) :
    this.setState({computerOpen: true});
  }

  render() {
    const { activateHome } = this.props;
    const { computerOpen } = this.state;    

    return (
      <section className='component-full-screen'>
        <header className='component-full-screen-header' onClick={() => {activateHome()}}>
          <img src='./img/arrow.svg' className='back-to-home' role='presentation'/>
          BACK
        </header>
        <section className='Projects component-full-screen-content component-full-screen-content-2'>
                <button className='activate-computer-button'  onClick={() => {this.activateComputer()}}>
          {computerOpen ? 'CLOSE' : 'OPEN'}</button>
          <div className='computer'>
            <div className={`computer-back ${computerOpen ? 'computer-back-open' : null}`}>
              <ComputerScreen computerOpen={computerOpen} />
            </div>
            <div className='computer-bottom'></div>
          </div>
        </section>
      </section>
    );
  }
}

export default Projects;



// computerOpen || (window.innerWidth <= 600))
              // { (window.innerWidth <= 600)? this.setState({computerOpen: true}) : null}

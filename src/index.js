import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/reset.css';
import './css/index.css';

ReactDOM.render(
  <BrowserRouter history={history}>
    <App>
      <Match exactly pattern="/" component={App} />
      <Match exactly pattern="/projects" component={Projects} />
      <Match exactly pattern="/contact" component={Contact} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

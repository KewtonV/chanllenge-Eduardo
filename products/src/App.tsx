import React from 'react';

import HeaderComponent from './components/header'
import FooterComponent from './components/footer';
import Routes from './routes'

import './app.css'

function App() {
  return (
    <div id="app">
      <HeaderComponent />
      <Routes />
      <FooterComponent />
    </div>
  );
}

export default App;

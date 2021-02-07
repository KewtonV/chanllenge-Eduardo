import React from 'react';

import HeaderComponent from './components/header'
import FooterComponent from './components/footer'
import Dashboard from './pages/dashboard'

import './app.css'

function App() {
  return (
    <div id="app">
      <HeaderComponent />
      <Dashboard />
      <FooterComponent />
    </div>
  );
}

export default App;

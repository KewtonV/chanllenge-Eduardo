import React from 'react';

import HeaderComponent from './components/header'
import FooterComponent from './components/footer'
import Dashboard from './pages/dashboard'
import AddProduct from './pages/addProduct'

import './app.css'

function App() {
  return (
    <div id="app">
      <HeaderComponent />
      <AddProduct />
      <Dashboard />
      <FooterComponent />
    </div>
  );
}

export default App;

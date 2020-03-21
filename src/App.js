import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/component.homepage';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>  
  );                       
}

export default App;

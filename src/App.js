import React from 'react';
import { Route } from 'react-router-dom';

import { Home, About, Contact, Navigation } from './components';

import './App.css';

const App = () => (
  <div>
    <Navigation />
    <Route exact path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route>
  </div>
);

export default App;

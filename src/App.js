import React from 'react';
import './assets/css/main.css';
import Header from './components/Header'

import Home from './pages/Home';


import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
        </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;

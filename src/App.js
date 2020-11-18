import React from 'react';
import './assets/css/main.css';
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import FutureCloud from './pages/FutureCloud';


import { HashRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <HashRouter>
        <Header/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/future/cloud" component={FutureCloud} />
        </Switch>
        <Footer/>
        </HashRouter>
    </>
  );
}

export default App;

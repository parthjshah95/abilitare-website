import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/pages/Home';
import Downloads from './components/Home/pages/Downloads';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/downloads' exact component={Downloads} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

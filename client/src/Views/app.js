import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About'
import './app.scss'
import { Footer } from '../Components/Footer'
import Results from './Results'


export default props =>
<BrowserRouter>
  <div className="app">
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/results" component={Results}/>
  </div>
</BrowserRouter>

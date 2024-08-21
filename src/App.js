import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Curriculo from './pages/Curriculo.jsx';
import Projetos from './pages/Projetos.jsx';
import Contact from './pages/Contact.jsx';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/curriculo" component={Curriculo}/>
          <Route path="/projetos" component={Projetos}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;

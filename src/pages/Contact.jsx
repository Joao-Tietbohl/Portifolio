import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Titulo from '../components/Titulo.jsx';
import './Contact.css';
import '../images/linkedin.png';
import '../images/github.png';
import '../images/gmail.png';

class Contact extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Titulo title="Contact"/>
          <div className="container">
          <div className="row">
            <div className="col-4">
            <a href="mailto:joaopedrotcorrea1212@gmail.com" target="_blank">
            <img className="logos" src={require('../images/gmail.png')}/>
            </a>
            </div>
            <div className="col-4">
              <a target="_blank" href="https://br.linkedin.com/in/joao-pedro-tietbohl-347823254">
                <img className="logos" src={require('../images/linkedin.png')}/>
              </a>
            </div>
            <div className="col-4">
            <a target="_blank" href="https://github.com/Joao-Tietbohl">
              <img className="logos" src={require('../images/github.png')}/>
            </a>
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Contact

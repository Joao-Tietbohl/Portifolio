import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Titulo from "../components/Titulo.jsx";
import "../images/FotoPortifolio.png";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Titulo title="Bem Vindo!" />
        <div className="container">
          <div className="col-8">
            <p>
              Olá! Sou João Pedro Tietbohl, estudante de Ciência da Computação
              no Instituto Federal de Santa Catarina e desenvolvedor full-stack
              especializado em Angular e C#. Atualmente, moro em Lages e sou
              apaixonado por criar soluções digitais que façam a diferença.
              Minha jornada é guiada pelo desejo de transformar ideias em
              realidade através da tecnologia, sempre buscando inovação e
              eficiência.
            </p>

            <div className="habilidades-section">
              <h2>Minhas Habilidades</h2>
              <div className="row skills">
                <div className="col-xs-3">
                  <h3>HTML</h3>
                  <img
                    className="skills-img"
                    src={require("../images/html.svg")}
                    alt="HTML"
                  />
                </div>
                <div className="col-xs-3">
                  <h3>CSS</h3>
                  <img
                    className="skills-img"
                    src={require("../images/css.svg")}
                    alt="CSS"
                  />
                </div>
                <div className="col-xs-3">
                  <h3>JavaScript</h3>
                  <img
                    className="skills-img"
                    src={require("../images/js.svg")}
                    alt="JavaScript"
                  />
                </div>
                <div className="col-xs-3">
                  <h3>Angular</h3>
                  <img
                    className="skills-img"
                    src={require("../images/angular.svg")}
                    alt="Angular"
                  />
                </div>
                <div className="col-xs-3">
                  <h3>Bootstrap</h3>
                  <img
                    className="skills-img"
                    src={require("../images/bootstrap.svg")}
                    alt="Bootstrap"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img
              className="profile"
              src={require("../images/FotoPortifolio.png")}
              alt="João Pedro Tietbohl"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

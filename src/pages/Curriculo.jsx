import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Titulo from "../components/Titulo.jsx";
import "./Curriculo.css";

class Curriculo extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Titulo title="Currículo" />
        <div className="curriculo-container">
          <section className="curriculo-section">
            <h2>Experiência Profissional</h2>
            <div className="curriculo-card-container">
              <div className="curriculo-card">
                <h3>NDD Tech</h3>
                <p><strong>Cargo:</strong> Desenvolvedor Junior</p>
                <p><strong>Período:</strong> 2022 - Presente</p>
              </div>
            </div>
          </section>

          <section className="curriculo-section">
            <h2>Formação Acadêmica</h2>
            <div className="curriculo-card-container">
              <div className="curriculo-card">
                <h3>Instituto Federal de Santa Catarina</h3>
                <p><strong>Curso:</strong> Bacharelado em Ciencia da Computação</p>
                <p><strong>Período:</strong> 2020 - Presente</p>
              </div>
            </div>
          </section>

          <section className="curriculo-section">
            <h2>Cursos Relevantes</h2>
            <div className="curriculo-card-container">
              <div className="curriculo-card">
                <h3>Academia do Programador</h3>
                <p><strong>Período:</strong> 2021 - 2022</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}


export default Curriculo;

// src/components/Projetos.jsx
import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Titulo from "../components/Titulo.jsx";
import imgProjetoBusca from "../images/projetoBusca.png";
import "./Projetos.css";

// Lista de projetos
const projetos = [
  {
    title: 'Algoritimos de Busca',
    description: 'Projeto explicando e exemplificando os algoritimos de Busca em Largura, Busca em Profundidade e Busca Gulosa.',
    image: imgProjetoBusca,
    link: 'https://camilecoelho.github.io/ProjetoDeIA/',
    repo: 'https://github.com/CamileCoelho/ProjetoDeIA'
  },
  {
    title: 'eAgendaWeb',
    description: 'Projeto dr uma agenda feito na Academia do Programador.',
    image: 'https://via.placeholder.com/300', 
    repo: 'https://github.com/Joao-Tietbohl/eAgendaWeb'
  },
];

class Projetos extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Titulo title="Projetos" />
        <div className="container">
          <section className="projetos-section">
            <h2>Projetos</h2>
            <div className="projetos-card-container">
              {projetos.map((projeto, index) => (
                <div key={index} className="projeto-card">
                  <img src={projeto.image} alt={projeto.title} className="projeto-img" />
                  <h3>{projeto.title}</h3>
                  <p>{projeto.description}</p>
                  <p>
                    <strong>Link:</strong>{" "}
                    <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                      Veja o Projeto
                    </a>
                  </p>
                  {projeto.repo && (
                    <p>
                      <strong>Repositório:</strong>{" "}
                      <a href={projeto.repo} target="_blank" rel="noopener noreferrer">
                        Veja o Repositório
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Projetos;

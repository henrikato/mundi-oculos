import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/estilos.css';

class AppIndex extends Component {
  render() {
    let logo = require("./../../assets/img/logo.png");
    return (
      <div className="index-wrapper">
        <header className="index-header">
          <div className="header-apresentacao">
            <span className="titulo-app">
              <img src={logo} alt="" />
              <h1>Mundi Oculos</h1>
              <h2>Saiba para onde os olhos do mundo estão direcionados.</h2>
            </span>
            <h4>Mundi Oculos (do Latim “Olhos Do Mundo”) é uma ferramenta que permite ao usuário acompanhar o crescimento do interesse de uma determinada região sobre um determinado tema com base na publicação de notícias em noticiários locais sobre o referido.</h4>
            <div className="botoes-acesso-plataforma">
              <h4>Acesse agora</h4>
              <span>
                <Link to="/login" className="botao-login">Login</Link>
                <Link to="/cadastro" className="botao-cadastro">Cadastre-se</Link>
              </span>
            </div>
          </div>
          {/* <aside className="imagem-showcase">
            <div>
              <img src="http://placehold.it/900x900?text=Imagem decorativa com sites que podem ser acessados pelo produto" alt="" />
            </div>
          </aside> */}
        </header>
      </div>
    );
  }
}

export default AppIndex;

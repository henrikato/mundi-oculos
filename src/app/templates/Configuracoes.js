import React, { Component } from 'react';
import Menu from './partials/Menu';

class Configuracoes extends Component {
    render() {
        return (
            <div className="main-layout">
                <Menu ativo="configuracoes" />
                <div className="main-container dashboard">
                    <h1>Olá, mundo!</h1>
                </div>
            </div>
        )
    }
}

export default Configuracoes;
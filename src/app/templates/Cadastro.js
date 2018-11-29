import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import 'assets/css/estilos.css';

import MainStore from 'app/stores/MainStore';
import cadastrarUsuario from 'app/actions/CadastroActions';

class _cadastro extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            nome: '',
            sobrenome: '',
            telefone: '',
            email: ''
        };

        this.cadastrar = this.cadastrar.bind(this)
    }
    
    cadastrar = event => {
        event.preventDefault();
        MainStore.dispatch(cadastrarUsuario({nome: this.state.nome, sobrenome: this.state.sobrenome, telefone: this.state.telefone, email: this.state.email}));
    }

    setLabelFocused = nomeLabel => {
        let input = document.getElementById(nomeLabel);
        let label = document.getElementsByTagName("label");
        label = _.find(label, (e) => { return e.attributes["for"].value === nomeLabel });
        if(input.value){
            label.style.bottom = '38pt';
        } else {
            label.style.bottom = '22pt';
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper-cadastro">
                    <header>
                        <h1 className="menu-voltar"><a href="/"><i className="fas fa-arrow-left"></i>&nbsp; Voltar</a></h1>
                    </header>
                    <h1 className="header-cadastro">Cadastre-se agora</h1>
                    <form onSubmit={this.cadastrar}>
                        <span>
                            <input id="nome" type="text" value={this.state.nome} onChange={(e) => {
                                this.setState({ nome: e.target.value });
                                this.setLabelFocused("nome");
                            }} ></input><br />
                            <label htmlFor="nome">Nome: </label>
                            <div className="highlight-input"></div>
                        </span>

                        <span>
                            <input id="sobrenome" type="text" value={this.state.sobrenome} onChange={(e) => {
                                this.setState({ sobrenome: e.target.value });
                                this.setLabelFocused("sobrenome");
                            }} ></input><br />
                            <label htmlFor="sobrenome">Sobrenome: </label>
                            <div className="highlight-input"></div>
                        </span>

                        <span>
                            <input id="telefone" type="text" value={this.state.telefone} onChange={(e) => {
                                this.setState({ telefone: e.target.value });
                                this.setLabelFocused("telefone");
                            }} ></input><br />
                            <label htmlFor="telefone">Telefone: </label>
                            <div className="highlight-input"></div>
                        </span>

                        <span>
                            <input id="email" type="email" value={this.state.email} onChange={(e) => {
                                this.setState({ email: e.target.value });
                                this.setLabelFocused("email");
                            }} ></input><br />
                            <label htmlFor="email">E-Mail: </label>
                            <div className="highlight-input"></div>
                        </span>

                        <input type="submit" name="Enviar" />
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { state }
};

const Cadastro = connect(mapStateToProps)(_cadastro);
export default Cadastro;
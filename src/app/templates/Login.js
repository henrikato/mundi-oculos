import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';

class BotaoLogin extends Component{
    constructor(props){
        super(props);
        this.state = { redirect: false }
    }

    login = (e) => {
        e.preventDefault();
        //let usuario = this.props.login;
        //let senha = this.props.senha;
        this.setState({ redirect: true });
    }

    render(){
        if(this.state.redirect) return ( <Redirect to="/dashboard"/> );
        return ( <button className={this.props.className} onClick={ this.login }>Login</button> );
    }
}

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: "",
            senha: ""
        }
    }

    setLabelFocused = nomeLabel => {
        let input = document.getElementById(nomeLabel);
        let label = document.getElementsByTagName("label");
        label = _.find(label, (e) => { return e.attributes["for"].value === nomeLabel });
        if (input.value) {
            label.style.bottom = '38pt';
        } else {
            label.style.bottom = '22pt';
        }
    }

    render(){
        return(
            <div>
                <div className="area-login">
                    <header>
                        <h1 className="menu-voltar"><a href="/"><i className="fas fa-arrow-left"></i>&nbsp; Voltar</a></h1>
                    </header>
                    <h1 className="header-login">Faça o seu login na plataforma</h1>
                    <form>
                        <span>
                            <input id="login" type="text" value={this.state.login} onChange={(e) => {
                                this.setState({ login: e.target.value });
                                this.setLabelFocused("login");
                            }} ></input><br />
                            <label htmlFor="login">Login: </label>
                            <div className="highlight-input"></div>
                        </span>

                        <span>
                            <input id="senha" type="password" value={this.state.senha} onChange={(e) => {
                                this.setState({ senha: e.target.value });
                                this.setLabelFocused("senha");
                            }} ></input><br />
                            <label htmlFor="senha">Senha: </label>
                            <div className="highlight-input"></div>
                        </span>

                        <BotaoLogin className="botao-login" login={ this.state.login } senha={ this.state.senha }/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
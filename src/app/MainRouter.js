import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import 'assets/css/estilos.css';
import AppIndex from './templates/Index';
import Cadastro from './templates/Cadastro';
import Login from './templates/Login';
import Dashboard from './templates/Dashboard/Dashboard';
import Configuracoes from './templates/Configuracoes';
import Tela404 from './templates/Tela404';
import Usuario from './templates/Usuario';

class _mainRouter extends Component{
    constructor(props){
        super(props);
        this.state = { menuVisivel: true }
    }

    toggleMenu = bool => {
        this.setState({ menuVisivel: bool })
    }

    render() {
        return (
            <Provider store = { this.props.store } >
                <Router>
                    <div className="main">
                        <Switch>
                            <Route exact path="/" component={AppIndex} />
                            <Route path="/cadastro" component={Cadastro} />
                            <Route path="/login" component={Login} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/configuracoes" component={Configuracoes} />
                            <Route path="/perfil" component={Usuario} />
                            <Route component={Tela404} />
                        </Switch>
                    </div>
                </Router>
            </Provider >
        );
    }
}

const mapStateToProps = state => {
    return { menuVisivel: state.menuVisivel || true };
}

const MainRouter = connect(mapStateToProps)(_mainRouter);
export default MainRouter;

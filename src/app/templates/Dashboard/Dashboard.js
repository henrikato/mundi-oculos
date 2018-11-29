import React, { Component } from 'react';
import Menu from '../partials/Menu';
import Rodape from '../partials/Rodape';
import ViewNoticias from './Noticias';
import ViewGraficos from './Graficos';

class MenuDashboard extends Component {
    changeView = nomeView => this.props.changeView(nomeView);

    render(){
        return(
            <div>
                <div className="barra-topo">
                    <img src="http://placehold.it/100x100" alt="" />
                    <h1>Mundi Oculos</h1>
                </div>
                <nav className="secoes-dashboard">
                    <ul>
                        <li className={this.props.view === "noticias" ? 'view-atual' : ''}>
                            <span onClick={() => this.changeView({ view: "noticias" })}>Notícias</span>
                        </li>
                        <li className={this.props.view === "grafico" ? 'view-atual' : ''}>
                            <span onClick={() => this.changeView({ view: "grafico" })}>Gráfico</span>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = { view: "noticias" };
    }
    
    changeView = nomeView => {
        this.setState(nomeView);
    }

    render(){
        return(
            <div>
                <div className="main-layout">
                    <Menu ativo="dashboard" />
                    <div className="main-container dashboard">
                        <MenuDashboard changeView={this.changeView} view={this.state.view} />
                        <ViewNoticias visivel={this.state.view === "noticias"} />
                        <ViewGraficos visivel={this.state.view === "grafico"} />
                    </div>
                </div>
                <Rodape />
            </div>
        )
    }
}

export default Dashboard;
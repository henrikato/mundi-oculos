import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = { menuVisivel: true }
    }
    
    toggleMenu = () => {
        this.setState({ menuVisivel: !this.state.menuVisivel });
        let navBar = document.getElementsByClassName("menu").item(0);
        let container = document.getElementById("root");
        navBar.classList.toggle("menu-oculto");
        container.classList.toggle("main-container-full");
    }

    componentDidMount = () => this.toggleMenu();

    render() {
        var inputAtivo = document.getElementById(this.props.ativo);
        if (inputAtivo) {
            inputAtivo.classList.add("item-atual");
        }
        return (
            <aside className="menu">
                <section className="dados-usuario">
                    <img src="http://placehold.it/250x250" alt="" />
                    <span>
                        <p>Fulano de Tal</p>
                        <Link to="/perfil">Ver perfil</Link>
                    </span>
                </section>
                <button 
                    className="botao-toggle-menu" 
                    onClick={() => this.toggleMenu()}>
                        <i className={ this.state.menuVisivel ? 'fas fa-times' : 'fas fa-bars' }></i>
                </button>
                <nav className="itens-menu">
                    <ul>
                        <li id="dashboard"><Link to="/dashboard"><i className="fas fa-home"></i>Início</Link></li>
                        <li id="configuracoes"><Link to="/configuracoes"><i className="fas fa-cogs"></i>Configurações</Link></li>
                        <li id="logout"><Link to="/"><i className="fas fa-sign-out-alt"></i>Logout</Link></li>
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Menu;
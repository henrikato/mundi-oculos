import React, { Component } from 'react';
import Menu from './partials/Menu';

class Usuario extends Component{
    render(){
        return(
            <div>
                <div class="usuario">
                    <Menu />
                    <h1>O jogo</h1>
                </div>
            </div>
        )
    }
}
export default Usuario;
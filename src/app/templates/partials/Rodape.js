import React, { Component } from 'react';

class Rodape extends Component{
    render(){
        return(
            <div className="rodape">
                <span className="primeira-lista">
                    <ul>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Informações Legais</a></li>
                        <li><a href="#">Entre em contato</a></li>
                    </ul>
                </span>
                <span className="texto">
                    <p>Aqui poderíamos colocar um texto legal no rodapé, mas por enquanto este é apenas um MVP, então fica por isso.
                        <br/>Ah, todas as informações extraídas por este produto não sofreram nenhuma alteração em seu conteúdo, e não são da autoria de nenhum dos desenvolvedores.
                    </p>
                </span>
            </div>
        )
    }
}
export default Rodape;
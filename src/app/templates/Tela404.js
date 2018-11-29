import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const Tela404 = ({ location }) => {
    let nomeLocation = _.upperFirst(location.pathname.substring(1));
    return (
        <div className="mensagem-404">
            <h1>Esta página não foi encontrada{nomeLocation ? ` (${nomeLocation}).` : '.'} <br />
                <Link to="/">Clique aqui para voltar para a página inicial.</Link>
            </h1>
        </div>
    )
}

export default Tela404;
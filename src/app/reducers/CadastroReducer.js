//import MainStore from "../stores/MainStore";

import { CADASTRAR_USUARIO } from 'app/actions/CadastroActions';

const initialState = {
    usuario: null
};

const cadastrarUsuario = (state = initialState, action) => {
    switch(action.type){
        case CADASTRAR_USUARIO:
            state.usuario = action.usuario;
            return state;
        default: return state;
    }
};

export default cadastrarUsuario;
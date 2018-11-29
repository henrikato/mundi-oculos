import { combineReducers } from 'redux';
import cadastrarUsuario from './CadastroReducer';


const MainReducer = combineReducers({
    cadastrarUsuario
})

export default MainReducer;
import { createStore } from 'redux';
import MainReducer from 'app/reducers/MainReducer';

const MainStore = createStore(MainReducer);

export default MainStore;
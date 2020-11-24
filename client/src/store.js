import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import { saveState, loadState } from './helpers/localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
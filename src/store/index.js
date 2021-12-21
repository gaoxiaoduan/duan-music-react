import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reduceres from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const stroe = createStore(reduceres, composeEnhancers(applyMiddleware(thunk)));

export default stroe;

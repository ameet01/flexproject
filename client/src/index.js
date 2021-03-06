import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import './styles/reset.css';
import './styles/index.css';
import './styles/navbar.css';
import './styles/splash.css';
import './styles/footer.css';
import './styles/session.css';
import './styles/game.css';
import './styles/lobby.css';
import './styles/stats.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

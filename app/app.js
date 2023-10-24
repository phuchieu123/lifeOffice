import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './containers/App';
import createReducer from './reducers';

const initialState = {};
const store = configureStore(createReducer, initialState);

function AppRoot() {
  return (
    <Provider store={store}>
          <App />
    </Provider>
  );
}

export default AppRoot;

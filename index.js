import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './src/store/store';

const RNredux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
AppRegistry.registerComponent('firstNativeApp', () => RNredux);


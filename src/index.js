import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { getAllFonts, getAllCategories } from './actions';
const store = configureStore();
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(getAllFonts());
store.dispatch(getAllCategories());
unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();

import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import CoursesPage from './components/CoursesPage';

const store = configureStore(); // The parameter for this function is optional, and can be passed while creating a server rendered App.
// It is already using a blank array as initial state using ES6 defualt parameter(courseReducer.js).
// Passing initial state here would overwrite that value.

ReactDOM.render(
    <Provider store={store}>
        <CoursesPage />
    </Provider>,
    document.getElementById('root')
);

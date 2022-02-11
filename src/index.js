import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";


const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
    <App />,
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

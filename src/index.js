import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MyRedusers} from "./reduser/MyRedusers";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";


import Provider from "react-redux/es/components/Provider";

const store = createStore(MyRedusers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

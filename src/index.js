import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import DimSum from './container/DimSum';
import Home from './container/Home';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
        <App>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/dimsum" component={DimSum}/>
            </Switch>
        </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Router,
    Route,
    Redirect,
    Link,
    hashHistory
} from 'react-router';

import Layout from "./components/Layout";
import Home from "./components/Home";
import Settings from "./components/Settings";

const appElement: Element = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="home" component={Home}></Route>
            <Route path="settings" component={Settings}></Route>
            // <Redirect path="*" to="home" />
            <Route path="*" component={Home}/>
        </Route>
    </Router>,
    appElement
);
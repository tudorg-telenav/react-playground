import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Router,
    Route,
    Redirect,
    Link,
    browserHistory
} from 'react-router';

import Layout from "./components/Layout"

const appElement: Element = document.getElementById('app');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="home" component={Layout}>
        </Route>
        <Redirect path="*" to="home" />
    </Router>,
    appElement
);
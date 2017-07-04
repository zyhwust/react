import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory, Redirect,Lifecycle, RouteContext } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Menu from './common/menu/Menu';
import ProductList from './page/ProductList';
// import {DatePicker,Button} from 'antd';
import Index from './components/Index';
import Login from './components/Login/Login';

import './index.css';
import 'antd/dist/antd.css';

function checkPermission(nextState, replace, next) {
	// console.log(window.localStorage.userId);
	if ( window.localStorage.userId ) {
		next();
	} else if ( nextState.location.pathname !== '/login' ) {
		replace('/login');
		next();
	} else {
		next();
	}
}

const routes = 
	<Route onEnter={ checkPermission }>
		<Route path={ '/' } component={ App } >
	    	<IndexRoute component={ Index } />
			<Route path={ '/productList/:product' } component={ ProductList } />
			
			<Redirect from="messages/:id" to="/messages/:id" />
		</Route>
		<Route path={ '/login' } component={ Login } />
	</Route>;


ReactDOM.render(
	<Router history={browserHistory}>
        {routes}
    </Router>, 
    document.getElementById('app')
);
registerServiceWorker();

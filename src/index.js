import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory, Redirect,Lifecycle, RouteContext } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Menu from './common/menu/Menu';
import ProductList from './page/ProductList';
// import {DatePicker,Button} from 'antd';
import Index from './components/Index';
import JavaScript from './components/JavaScript/JavaScript';
import Window from './components/JavaScript/Window';
import Login from './components/Login/Login';

import './index.css';
import 'antd/dist/antd.css';

function check(nextState, replace, next) {
	let n = 0;
	console.log(nextState)
	console.log(n++);
	console.log(window.localStorage.userId);
	// if ( window.localStorage.userId ) {
	// 	next();
	// } else if ( nextState.location.pathname !== '/login' ) {
	// 	replace('/login');
	// 	next();
	// } else {
	// 	next();
	// }
	// 检查是否登录
	if ( !window.localStorage.userId && nextState.location.pathname !== '/login' ) {
		replace('/login');
	}
	// 检查路由权限
	// if ( !checkPermission() ) {
	// 	replace('/login');
	// }
	next();
}

const routes = 
	<Route permisson="444" onEnter={ check }>
		<Route path={ '/' } component={ App } >
	    	<IndexRoute component={ Index } />
			<Route path={ '/productList/:product' } component={ ProductList } />
			
			<Route path={ '/JavaScript' } component={ JavaScript }>
				<Route permisson="Window" path={ '/JavaScript/Window' } component={ Window }></Route>
			</Route>
			
			<Redirect from="messages/:id" to="/messages/:id" />
		</Route>
		<Route path={ '/login' } permisson="Login" component={ Login } />
	</Route>;


ReactDOM.render(
	<Router history={browserHistory}>
        {routes}
    </Router>, 
    document.getElementById('app')
);
registerServiceWorker();

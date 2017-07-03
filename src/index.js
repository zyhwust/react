import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect,IndexRoute, browserHistory } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Menu from './common/menu/Menu';
import ProductList from './page/ProductList';
import {DatePicker,Button} from 'antd';
import 'antd/dist/antd.css';
import Index from './components/Index';

// const routes = 
// 	<Route path={'/'} component={App} />
// 	<Route path={'/productList'} component={ProductList} />;


ReactDOM.render(
	<Router history={browserHistory}>
        <Route path={'/'} component={App}>
        	<IndexRoute component={Index} />
			<Route path={'/productList/:product'} component={ProductList} />
		</Route>
    </Router>, 
    document.getElementById('app')
);
// ReactDOM.render(<Nav />, document.getElementById('nav'));
// ReactDOM.render(<Menu />, document.getElementById('menu'));
// ReactDOM.render(<ProductList />, document.getElementById('productList'));
// ReactDOM.render(<DatePicker />, document.getElementById('DatePicker'));
registerServiceWorker();

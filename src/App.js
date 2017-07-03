import React, { Component } from 'react';
import Nav from './Nav';
import logo from './logo.svg';
import './App.css';
// 导入Link组件
import { Link } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Nav>
				</Nav>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<h1>React Router Tutorial</h1>
	            <ul role="nav">
	                <li><Link to="/productList">About</Link></li>
	                <li><Link to="/repos">Repos</Link></li>
	            </ul>
	            <div className="productList">
					{this.props.children}
	            </div>
			</div>
		);
	}
}

export default App;

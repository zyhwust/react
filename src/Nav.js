import React, { Component } from 'react';
import "./Nav.css";
// 导入Link组件
import { Link } from 'react-router';

var menuList = [
	{
		name: "首页",
		link: "/"
	},
	{
		name: "菜单1",
		link: "/productList/iphone"
	},
	{
		name: "菜单2",
		link: "/todo1"
	}
];
class Nav extends Component {
	render() {
		var list = [];
		menuList.forEach(function(menu) {
			list.push(<li><Link to={menu.link} activeStyle={{ color: 'red' }} onlyActiveOnIndex={true}>{menu.name}</Link></li>);
		})
		return (
		  	<div className="nav">
		  		<ul>
		  			{list}
		  		</ul>
		  	</div>
		);
	}
}
export default Nav;
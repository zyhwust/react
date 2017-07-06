import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import './App.css';
const { Content, Footer } = Layout;

const menuList = [
    {
        icon: 'home',
        name: '首页',
        key: 'index',
        children: [
        ],
        path: '/'
    },
    {
        icon: 'message',
        name: 'HTML',
        key: 'html',
        children: [
            {
                icon: 'filter',
                name: '表单',
                key: 'button',
                children: [
                    
                ],
                path: '/button'
            },
            {
                icon: 'apple',
                name: '图标',
                key: 'button1',
                children: [
                    
                ],
                path: '/button1'
            },
            {
                icon: 'line-chart',
                name: '标签页',
                key: 'button2',
                children: [
                    
                ],
                path: '/button2'
            },
        ],
        path: '/f'
    },
    {
        icon: 'home',
        name: 'CSS',
        key: 'CSS',
        children: [
            {
                icon: 'filter',
                name: '布局',
                key: 'layout',
                children: [
                    
                ],
                path: '/layout'
            },
            {
                icon: 'apple',
                name: '图标',
                key: 'icon',
                children: [
                    
                ],
                path: '/layout'
            },
            {
                icon: 'line-chart',
                name: 'CSS3',
                key: 'CSS3',
                children: [
                    
                ],
                path: '/css3'
            },
        ],
        path: '/CSS'
    },
    {
        icon: 'home',
        name: 'JavaScript',
        key: 'JavaScript',
        children: [
            {
                icon: 'line-chart',
                name: 'Window',
                key: 'Window',
                children: [
                    
                ],
                path: '/JavaScript/Window'
            },
        ],
        path: '/JavaScript'
    },
];
class App extends React.Component {
 	state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
	// getInitialState 初始化组件状态
	// constructor(props) {
	// 	super(props);
	// 	console.log("getInitialState");
	// 	this.state = {

	// 	}
	// }
	// 组件第一次加载时渲染完成的事件，一般在此获取网络数据。实际开始项目开发时，会经常用到。
	comopentDidMount() {
		// console.log("comopentDidMount");
	}

	// 主要用于性能优化，React 的性能优化也是一个很重要的话题，后面一并讲解
	shouldComponentUpdate(nextProps, nextState) {
		// console.log("shouldComponentUpdate");
		return true;
	}

	// 组件更新了之后触发的事件，一般用于清空并更新数据。实际开始项目开发时，会经常用到。
	componentDidUpdate(prevProps, prevState) {
		// console.log("componentDidUpdate");
	}

	// 组件在销毁之前触发的事件，一般用户存储一些特殊信息，以及清理setTimeout事件等。
	componentWillUnmount() {
		// console.log("componentWillUnmount");
	}

	// render 返回组件要渲染的模板
	render() {
		return (
			<Layout className="ant-layout-has-sider" style={{ height: '100%' }}>
				<SiderCustom path={this.props.location.pathname} userName={ '张远航' } menuList={ menuList } collapsed={this.state.collapsed} toggle={this.toggle} />
				<Layout>
	                <HeaderCustom collapsed={this.state.collapsed} toggle={this.toggle} />
	                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
	                  	{this.props.children}
	                </Content>
	                <Footer style={{ textAlign: 'center' }}>
	                  	React-Admin ©2017 Created by 865470087@qq.com
	                </Footer>
              	</Layout>
			</Layout>
		);
	}
}

export default App;

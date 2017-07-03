import React, { Component } from 'react';
import {DatePicker,Button} from 'antd';
// import 'antd/dist/antd.css';	

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            filterText: 'Baseball',
			inStockOnly: false
		}
	}

	handleUserInput = (filterText, inStockOnly) => {
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		})
	}

	render() {
		var products1 = [
		  				{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
					  	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
					  	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
					  	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
					  	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
					  	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
					];
		return (
			<div>

		  		<SearchBar 
		  			filterText={this.state.filterText} 
		  			inStockOnly={this.state.inStockOnly} 
		  			onUserInput={this.handleUserInput}
		  		/>
		  		<h2>{ this.props.params.product }</h2>
		  		<ProductTable 
		  			filterText={this.state.filterText} 
		  			inStockOnly={this.state.inStockOnly} 
		  			products={products1} 
		  		/>
		  	</div>
		);
	}
}

class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	handleChange = (e) => {
		this.props.onUserInput(
			this.refs.filterTextInput.value,
			this.refs.inStockOnlyInput.checked
		);
	}

	// handleChange = (function() {
	// 	var self = this;
	// 	console.log(this)
	// 	return {self.props.onUserInput(
	// 				self.refs.filterTextInput.value,
	// 				self.refs.inStockOnlyInput.checked
	// 			}
	// })()

	render() {
		return (
		  	<div className="searchWrap">
		  		<form>
					<input type="text" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />
        			<Button type="primary">dianji</Button>
					<button>搜索</button>
					<p>
			          	<input type="checkbox" checked={this.props.inStockOnly} ref="inStockOnlyInput" onChange={this.handleChange} />
			          	{' '}
			          	Only show products in stock
			        </p>
			    </form>
		  	</div>
		);
	}
}

class ProductTable extends Component {
	render() {
		var rows = [];
		var lastCategory = null;
		var self = this;
		this.props.products.forEach(function(product) {
			if (product.name.indexOf(self.props.filterText) === -1 || (!product.stocked && self.props.inStockOnly)) {
        		return;
      		}
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
      		lastCategory = product.category;
		});
		return (
		  	<table>
		        <thead>
		          	<tr>
			            <th>Name</th>
			            <th>Price</th>
		          	</tr>
		        </thead>
	        	<tbody>{rows}</tbody>
	      	</table>
		);
	}
}

class ProductRow extends Component {
	render() {
		var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>;
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
}

class ProductCategoryRow extends Component {
	render() {
		return (<tr><th colSpan="2">{this.props.category}</th></tr>);
	}
}

export default ProductList;

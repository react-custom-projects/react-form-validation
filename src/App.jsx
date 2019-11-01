import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import SearchForm from './js/containers/SearchForm';

class App extends Component {
	render() {
		return (
			<div className="container">
				<SearchForm />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(hot(App));

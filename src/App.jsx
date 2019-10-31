import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return <div>hi</div>;
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(hot(App));

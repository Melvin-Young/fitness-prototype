import React, { Component } from 'react';

export default class CustLink extends Component {
	render() {
		return (
			<span>
				{this._reactInternalInstance._currentElement._owner._instance}
			</span>
		);
	}
}

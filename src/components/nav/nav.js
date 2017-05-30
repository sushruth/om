import React, {Component} from 'react';
import './nav.css'

export class Nav extends Component {
	render() {
		return(
			<nav className="flexParent">
				<div>Stock market</div>
				<div>Insurance</div>
				<div>Loans</div>
				<div>Other</div>
			</nav>
		)
	}
}
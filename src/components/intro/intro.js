import React, {Component} from 'react';
import './intro.css'

export class Intro extends Component {
	render() {
		return (
			<div className="flexParent intro">
				<div className="left flexParent col shrinker start">
					<div className="assetHeading">Come Let's Grow !!</div>
					<p className="assetBody">
						One stop destination for all financial solutions as in stock market, Loans, Insurance, Tax, Planning and Other Services. Earn while you learn. Live trading room facility available, First of its kind in India.
					</p>
				</div>
				<div className="right">
					<img src={require('./../../images/bull-bear.png')} alt="Stock Market" height="130px"/>
				</div>
			</div>
		)
	}
}
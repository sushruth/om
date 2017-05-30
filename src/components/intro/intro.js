import React, {Component} from 'react';
import './intro.css'

export class Intro extends Component {
	render() {
		return (
			<div className="flexParent intro">
				<div className="left flexParent col shrinker start">
					<div className="assetHeading">Asset Intelligence</div>
					<p className="assetBody">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et augue massa. Sed feugiat non nisi scelerisque lobortis. Nullam nec mauris non urna viverra convallis at at leo. Fusce scelerisque finibus ultrices. Nulla nec mauris suscipit, placerat nibh sit amet. 
					</p>
				</div>
				<div className="right">
					<img src={require('./../../images/bull-bear.png')} alt="Stock Market" height="130px"/>
				</div>
			</div>
		)
	}
}
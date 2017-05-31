import React, { Component } from 'react';
import './stockMarket.css';

export class StockMarket extends Component {
	render() {
		return (
			<div className="flexParent stockMarket">
				<div className="stockMarketImage"><img className="leftIcon" src={require('./../../images/stock-market.png')} alt="" height="400" /></div>
				<div className="tiles flexParent wrap">
					<div className="education">
						<div className="title">INTRADAY TRADING STRATEGIES</div>
						<p className="body textRight">
							Curabitur consequat libero justo, vel facilisis nisi malesuada vitae. Suspendisse in magna tempor, convallis velit vitae, imperdiet massa. Quisque eget elementum lacus. Proin eleifend condimentum quam, in placerat dui commodo vitae. Aenean lacinia erat ut magna sodales, sit amet fermentum velit porta
						</p>
					</div>
					<div className="demat">
						<div className="title">OPTIONS TRADING COURSE</div>
						<p className="body">
							Maecenas neque diam, fermentum vel lacus nec, pulvinar sodales magna. Phasellus nunc nisi, scelerisque eu mi in, viverra semper tortor. Nulla euismod eros at augue efficitur suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
						</p>
					</div>
					<div className="portfolio">
						<div className="title">TECHNICAL ANALYSIS</div>
						<p className="body textRight">
							Curabitur consequat libero justo, vel facilisis nisi malesuada vitae. Suspendisse in magna tempor, convallis velit vitae, imperdiet massa. Quisque eget elementum lacus. Proin eleifend condimentum quam, in placerat dui commodo vitae. Aenean lacinia erat ut magna sodales, sit amet fermentum velit porta
						</p>
					</div>
					<div className="tradingRoom">
						<div className="title">FUNDAMENTAL ANALYSIS</div>
						<p className="body">
							Maecenas neque diam, fermentum vel lacus nec, pulvinar sodales magna. Phasellus nunc nisi, scelerisque eu mi in, viverra semper tortor. Nulla euismod eros at augue efficitur suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
						</p>
					</div>
					<div className="flexParent">
						<ul className="listItems">
							<li>Live trading room facility available.</li>
							<li>We provide stock Market Education, Demat Account Opening, Portfolio <br/>Management and Trading room facility.</li>
							<li>First of its kind in India.</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
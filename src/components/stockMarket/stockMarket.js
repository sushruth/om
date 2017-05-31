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
							Successful strategies in Intraday will be revealed which makes trading more Easy. Get trained to be a professional trader. Experience the cutting edge online trading platform to learn and make the best use of it.
						</p>
					</div>
					<div className="demat">
						<div className="title">OPTIONS TRADING COURSE</div>
						<p className="body">
							95% of the traders in derivative market today in India don’t have knowledge about Greeks. Learn Greeks in an innovative way and trade like a professional in derivative segment. Greeks are very important to derive strategies in Options.
						</p>
					</div>
					<div className="portfolio">
						<div className="title">TECHNICAL ANALYSIS</div>
						<p className="body textRight">
							Usage of Japanese candlesticks. Chart analysis and pattern based training covered here.
						</p>
					</div>
					<div className="tradingRoom">
						<div className="title">FUNDAMENTAL ANALYSIS</div>
						<p className="body">
							Basic knowledge on stock market, Long term stock selection, All types of financial ratio and much more.
						</p>
					</div>
					<div className="flexParent">
						<p className="subHeading">
							Live trading room facility available, first of its kind in india. We provide Stock market education, Demat account opening, Portfolio management and much more.							
						</p>
					</div>
				</div>
			</div>
		);
	}
}
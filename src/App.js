import React, { Component } from 'react';
import { Header, Intro, Nav, StockMarket, Insurance, Business, Loan } from './components';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="container special">
					<Header />
				</div>
				<div className="shaded">
					<div className="container special">
						<Intro />
					</div>
				</div>
				<div className="container special">
					<Nav />
				</div>
				<div className="afterMarket">
					<div className="container special">
						<StockMarket />
					</div>
				</div>
				<div className="container special">
					<Insurance />
				</div>
				<div className="blue">
					<div className="container special">
						<Business />
					</div>
				</div>
				<div className="loan">
					<div className="container">
						<Loan />
					</div>
				</div>
				<div id="map"></div>
				<div className="footer">
					&copy; 2017 <span className="bar"> | </span> Options Mantra
				</div>
			</div>
		);
	}
}

export default App;

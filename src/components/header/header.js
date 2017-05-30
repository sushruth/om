import React, { Component } from 'react';
import { logo } from '../../images/logo';
import { phone } from '../../images/generic'
import './header.css'

export class Header extends Component {
	render() {
		return (
			<header className="header flexParent shrinker">
				<div className="flexParent logo">
					<div>{logo(80, null, '#fff', null)}</div>
					<div className="flexParent col start nameAndTag">
						<div className="company">Options Mantra</div>
						<div className="tag">ideas multiply money</div>
					</div>
				</div>
				<div className="filler"> </div>
				<div className="flexParent info">
					<div className="email">info@optionsmantra.com</div>
					<div className="bar">|</div>
					<div className="phone flexParent center">
						<a className="number" href="tel:+918041744399">080 - 4174 4399</a>
						<div className="icon">{phone(16, '#777')}</div>
					</div>
				</div>
			</header>
		)
	}
}
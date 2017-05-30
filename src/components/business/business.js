import React, { Component } from 'react';
import './business.css'

export class Business extends Component {
	render() {
		return (
			<div className="business">
				<div className="businessTitle">Business Services</div>
				<div className="flexParent graphic">
					<div className="businessImage">
						<img src={require('./../../images/castle.png')} alt="" width="400"/>
					</div>
					<div className="businessIcons">
						<div className="flexParent shrinker">
							<div className="round flexParent">
								<div>PAN</div>
							</div>
							<div className="round flexParent">
								<div>
									TAN
								</div>
							</div>
						</div>
						<div className="flexParent shrinker">
							<div className="round flexParent">
								<div>
									TIN
								</div>
							</div>
							<div className="round flexParent">
								<div>
									REG
								</div>
							</div>						
						</div>
					</div>
				</div>
				<div className="businessBar"></div>
				<div className="flexParent businessBottom">
					<p className="textRight">
						Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
					</p>
					<p>
						Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
					</p>
				</div>
			</div>
		)
	}
}
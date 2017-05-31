import React, { Component } from 'react'
import './insurance.css';

export class Insurance extends Component {
	render() {
		return (
			<div className="flexParent insurance">
				<div className="leftInsurance">
					<div className="insuranceHeading">Insurance</div>
					<p className="body">
						Enriching the lives of people who trust in you. Life is Uncertain and that uncertainty involves huge risks. The only way to get rid of your risks is to get INSURED by transferring your risks. Insure your Future…. Today! To make Good the Loss! Insurance may be described as a social device to reduce or eliminate risk of loss to life and property. Insurance turn accumulated capital into productive investments. Insurance enables to mitigate loss, Financial stability and promotes trade and commerce activities those results into economic growth And development.
					</p>
				</div>
				<div className="rightInsurance flexParent col start">
					<div className="flexParent life">
						<div className="insuranceIcon">
							<img src={require('./../../images/life-insurance.png')} alt=""/>
						</div>
						<div className="insuranceText">Life Insurance</div>
					</div>
					<div className="flexParent health">
						<div className="insuranceIcon">
							<img src={require('./../../images/health-insurance.png')} alt=""/>							
						</div>
						<div className="insuranceText">Health Insurance</div>
					</div>
					<div className="flexParent motor">
						<div className="insuranceIcon">
							<img src={require('./../../images/motor-insurance.png')} alt=""/>							
						</div>
						<div className="insuranceText">Motor Insurance</div>
					</div>
					<div className="flexParent marine">
						<div className="insuranceIcon">
							<img src={require('./../../images/marine-insurance.png')} alt=""/>							
						</div>
						<div className="insuranceText">Marine Insurance</div>
					</div>
				</div>
			</div>
		)
	}
}
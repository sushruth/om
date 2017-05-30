import React, { Component } from 'react'
import './insurance.css';

export class Insurance extends Component {
	render() {
		return (
			<div className="flexParent insurance">
				<div className="leftInsurance">
					<div className="insuranceHeading">Insurance</div>
					<p className="body">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in blandit enim. Pellentesque elementum dolor ut tellus vulputate imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse placerat mi quis elit mollis maximus. Curabitur dolor risus, mollis sed sem nec, suscipit maximus dolor. Pellentesque viverra odio dui, id sodales tortor pharetra a. Nam euismod lorem suscipit, aliquet tortor eget, vehicula nunc. Pellentesque pharetra nisl sit amet sollicitudin lacinia. 
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
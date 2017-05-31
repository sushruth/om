import React, {Component} from 'react';
import './loan.css'

export class Loan extends Component {
	render() {
		return (
			<div className="flexParent loanBox">
				<div className="hand"></div>
				<div className="flexParent insurance">
					<div className="leftInsurance">
						<div className="insuranceHeading">Loans</div>
						<p className="body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in blandit enim. Pellentesque elementum dolor ut tellus vulputate imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse placerat mi quis elit mollis maximus. Curabitur dolor risus, mollis sed sem nec, suscipit maximus dolor. Pellentesque viverra odio dui, id sodales tortor pharetra a. Nam euismod lorem suscipit, aliquet tortor eget, vehicula nunc. Pellentesque pharetra nisl sit amet sollicitudin lacinia. 
						</p>
					</div>
					<div className="rightInsurance flexParent col start">
						<div className="flexParent life">
							<div className="insuranceIcon">
								<img src={require('./../../images/personal-loan.png')} alt=""/>
							</div>
							<div className="insuranceText">Personal Loans</div>
						</div>
						<div className="flexParent health">
							<div className="insuranceIcon">
								<img src={require('./../../images/home-loan.png')} alt=""/>							
							</div>
							<div className="insuranceText">Home Loans</div>
						</div>
						<div className="flexParent motor">
							<div className="insuranceIcon">
								<img src={require('./../../images/mortgage-loan.png')} alt=""/>							
							</div>
							<div className="insuranceText">Mortgage Loans</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}



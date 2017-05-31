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
							In finance, a loan is the lending of money from one individual, organization or entity to another individual, organization or entity. A loan is a debt provided by an entity (organization or individual) to another entity at an interest rate, and evidenced by a promissory note which specifies, among other things, the principal amount of money borrowed, the interest rate the lender is charging, and date of repayment. A loan entails the reallocation of the subject asset(s) for a period of time, between the lender and the borrower.
						</p>
					</div>
					<div className="rightLoan flexParent col start">
						<div className="flexParent life">
							<div className="loanIcon">
								<img src={require('./../../images/personal-loan.png')} alt=""/>
							</div>
							<div className="insuranceText">Personal Loans</div>
						</div>
						<div className="flexParent health">
							<div className="loanIcon">
								<img src={require('./../../images/home-loan.png')} alt=""/>							
							</div>
							<div className="insuranceText">Housing Loans</div>
						</div>
						<div className="flexParent motor">
							<div className="loanIcon">
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



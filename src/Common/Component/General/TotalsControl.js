// import statements
import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import {
	Numeral,
	IonIcon
} from '../General/';

// renders a totals control 
const TotalsControl = (props) => (
	<div className="main-content">
		<section className="section">
			<div className="row mt-4 totals-row animated fadeInDown">
				<div className="col-12 col-sm-6 col-lg-3">
					<div className="card card-sm-3">
						<div className="card-icon bg-primary">
							<i className="ion ion-arrow-graph-up-right" />
						</div>
						<div className="card-wrap">
							<div className="card-header">
								<h4>Sum Insured</h4>
							</div>
							<div className="card-body">
								<CountUp
									start={Numeral.unformat(props.totalSumInsured) / 2}
									end={Numeral.unformat(props.totalSumInsured)}
									duration={1}
									separator=","
									decimals={0}
									decimal="."
									prefix="R "
									useEasing={true}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-lg-3">
					<div className="card card-sm-3">
						<div className="card-icon bg-danger">
							<i className="ion ion-stats-bars" />
						</div>
						<div className="card-wrap">
							<div className="card-header">
								<h4>Base Premium</h4>
							</div>
							<div className="card-body">
								<CountUp
									start={Numeral.unformat(props.totalBasePremium) / 2}
									end={Numeral.unformat(props.totalBasePremium)}
									duration={1.5}
									separator=","
									decimals={2}
									decimal="."
									prefix="R "
									useEasing={true}
								/>
							</div>
							{
								props.totalOriginalBasePremium && props.totalOriginalBasePremium !== '' ?
									(<div className="card-body-sub">
										{
											Numeral(props.totalBasePremiumAdjustment) > 0 ?
												<IonIcon iconClass="ion ion-arrow-up-a increase" /> :
												Numeral(props.totalBasePremiumAdjustment) < 0 ?
													<IonIcon iconClass="ion ion-arrow-down-a decrease" /> :
													<IonIcon iconClass="ion ion-arrow-right-a neutral" />
										}
										<span>
											{
												<React.Fragment>
													<CountUp
														start={Numeral.unformat(props.totalOriginalBasePremium) / 2}
														end={Numeral.unformat(props.totalOriginalBasePremium)}
														duration={1.5}
														separator=","
														decimals={2}
														decimal="."
														prefix="R "
														suffix=" ("
														useEasing={true}
													/>
													<CountUp
														start={Numeral.unformat(props.totalBasePremiumAdjustment) / 2}
														end={Numeral.unformat(props.totalBasePremiumAdjustment)}
														duration={1.5}
														separator=","
														decimals={2}
														decimal="."
														prefix=""
														suffix="%)"
														useEasing={true}
													/>
												</React.Fragment>
											}
										</span>
									</div>) :
									''
							}
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-lg-3">
					<div className="card card-sm-3">
						<div className="card-icon bg-info">
							<i className="ion ion-android-done-all" />
						</div>
						<div className="card-wrap">
							<div className="card-header">
								<h4>Ext Premium</h4>
							</div>
							<div className="card-body">
								<CountUp
									start={Numeral.unformat(props.totalExtensionPremium) / 2}
									end={Numeral.unformat(props.totalExtensionPremium)}
									duration={1.4}
									separator=","
									decimals={2}
									decimal="."
									prefix="R "
									useEasing={true}
								/>
							</div>
							{
								props.totalOriginalExtensionPremium && props.totalOriginalExtensionPremium !== '' ?
									(<div className="card-body-sub">
										{
											Numeral(props.totalExtensionPremiumAdjustment) > 0 ?
												<IonIcon iconClass="ion ion-arrow-up-a increase" /> :
												Numeral(props.totalExtensionPremiumAdjustment) < 0 ?
													<IonIcon iconClass="ion ion-arrow-down-a decrease" /> :
													<IonIcon iconClass="ion ion-arrow-right-a neutral" />
										}
										<span>
											{
												<React.Fragment>
													<CountUp
														start={Numeral.unformat(props.totalOriginalExtensionPremium) / 2}
														end={Numeral.unformat(props.totalOriginalExtensionPremium)}
														duration={1.5}
														separator=","
														decimals={2}
														decimal="."
														prefix="R "
														suffix=" ("
														useEasing={true}
													/>
													<CountUp
														start={Numeral.unformat(props.totalExtensionPremiumAdjustment) / 2}
														end={Numeral.unformat(props.totalExtensionPremiumAdjustment)}
														duration={1.5}
														separator=","
														decimals={2}
														decimal="."
														prefix=""
														suffix="%)"
														useEasing={true}
													/>
												</React.Fragment>
											}
										</span>
									</div>) :
									''
							}
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-lg-3">
					<div className="card card-sm-3">
						<div className="card-icon bg-success">
							<i className="ion ion-social-usd" />
						</div>
						<div className="card-wrap">
							<div className="card-header">
								<h4>Total Premium</h4>
							</div>
							<div className="card-body">
								<CountUp
									start={Numeral.unformat(props.totalPremium) / 2}
									end={Numeral.unformat(props.totalPremium)}
									duration={1.3}
									separator=","
									decimals={2}
									decimal="."
									prefix="R "
									useEasing={true}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

// component prop type validation
TotalsControl.propTypes = {
	totalSumInsured: PropTypes.string.isRequired,
	totalBasePremium: PropTypes.string.isRequired,
	totalOriginalBasePremium: PropTypes.string,
	totalBasePremiumAdjustment: PropTypes.string,
	totalExtensionPremium: PropTypes.string.isRequired,
	totalOriginalExtensionPremium: PropTypes.string,
	totalExtensionPremiumAdjustment: PropTypes.string,
	totalPremium: PropTypes.string.isRequired
}

// export the address control
export default React.memo(TotalsControl);
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
//selectors
import {
	isFormValid,
	searchFormBillerMemberId,
	searchFormBillerTransactionId,
	searchFormCreditFirst,
	searchFormCreditLast,
	searchFormEmail,
	searchFormFirstName,
	searchFormLastName,
	searchFormProbillerMemberId,
	searchFormProbillerSubscriptionId,
	searchFormProbillerTransactionId,
	searchFormTransactionEndDate,
	searchFormTransactionStartDate,
	searchFormUsername,
} from '../store/selectors/SearchFormSelectors';
//components
import Input from '../components/shared/Input';
import {
	setBillerMemIdProperties,
	setBillerTranIdProperties,
	setCreditFirstProperties,
	setCreditLastProperties,
	setEmailProperties,
	setFirstNameProperties,
	setLastNameProperties,
	setProMemIdProperties,
	setProSubIdProperties,
	setProTranIdProperties,
	setTransactionEndProperties,
	setTransactionStartProperties,
	setUsernameProperties,
} from '../store/actions/SearchFormActions';
import { setMaximumStartDate, setMinimumEndDate } from '../constants/CustomValidators';
import { getDateInputFormat } from '../constants/Helpers';

class SearchForm extends Component {
	inputsConfigurations = {
		emailConf: {
			label: 'Email',
			elementType: 'input',
			elementConfig: {
				type: 'email',
				placeholder: "What is the user's email?",
				name: 'email',
			},
		},
		creditFirstConf: {
			label: 'Credit Card',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'First 6 digits',
				name: 'creditFirst',
			},
		},
		creditLastConf: {
			label: 'Credit Card',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'Last 4 digits',
				name: 'creditLast',
			},
		},
		usernameConf: {
			label: 'Username',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: "what is the user's username?",
				name: 'username',
			},
		},
		firstNameConf: {
			label: 'First Name',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				name: 'firstName',
			},
		},
		lastNameConf: {
			label: 'Last Name',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				name: 'lastName',
			},
		},
		transactionStartDateConf: {
			label: 'Start Transaction Dates',
			elementType: 'input',
			elementConfig: {
				type: 'date',
				placeholder: 'Start Date',
				name: 'transactionStartDate',
			},
		},
		transactionEndDateConf: {
			label: 'End Transaction Dates',
			elementType: 'input',
			elementConfig: {
				type: 'date',
				placeholder: 'End Date',
				name: 'transactionEndDate',
			},
		},
		probillerMemberIdConf: {
			label: 'Probiller Member ID',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				name: 'probillerMemberId',
			},
		},
		probillerTransactionIdConf: {
			label: 'Probiller Transaction ID',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				name: 'probillerTransactionId',
			},
		},
		billerMemberIdConf: {
			label: 'Biller Member ID',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				name: 'billerMemberId',
			},
		},
		billerTransactionIdConf: {
			label: 'Biller Transaction ID',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				name: 'billerTransactionId',
			},
		},
		probillerSubscriptionIdConf: {
			label: 'Probiller Subscription ID',
			elementType: 'input',
			elementConfig: {
				type: 'text',
				name: 'probillerSubscriptionId',
			},
		},
	};

	form = createRef();

	emailHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setEmailProperties(value));
	};

	creditFirstHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setCreditFirstProperties(value));
	};

	creditLastHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setCreditLastProperties(value));
	};

	usernameHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setUsernameProperties(value));
	};

	firstNameHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setFirstNameProperties(value));
	};

	lastNameHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setLastNameProperties(value));
	};

	transactionStartDateHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setTransactionStartProperties(value));
	};

	transactionEndDateHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setTransactionEndProperties(value));
	};

	probillerMemberIdHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setProMemIdProperties(value));
	};

	probillerTransactionIdHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setProTranIdProperties(value));
	};

	billerMemberIdHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setBillerMemIdProperties(value));
	};

	billerTransactionIdHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setBillerTranIdProperties(value));
	};

	probillerSubscriptionIdHandler = ({ target: { value } }) => {
		const { dispatch } = this.props;
		dispatch(setProSubIdProperties(value));
	};

	// on form submission
	onSubmitHandler = (event) => {
		event.preventDefault();
		let formData = new FormData(this.form.current);
		for (let [key, value] of formData.entries()) {
			console.log(key + ', ' + value);
		}
	};

	render() {
		const {
				emailConf,
				creditFirstConf,
				creditLastConf,
				usernameConf,
				firstNameConf,
				lastNameConf,
				transactionStartDateConf,
				transactionEndDateConf,
				probillerMemberIdConf,
				probillerTransactionIdConf,
				billerMemberIdConf,
				billerTransactionIdConf,
				probillerSubscriptionIdConf,
			} = this.inputsConfigurations,
			{
				email,
				creditFirst,
				creditLast,
				username,
				firstName,
				lastName,
				transactionStartDate,
				transactionEndDate,
				probillerMemberId,
				probillerTransactionId,
				billerMemberId,
				billerTransactionId,
				probillerSubscriptionId,
				isFormValid,
			} = this.props;

		let startDateMax = setMaximumStartDate(transactionEndDate.value),
			endDateMin = setMinimumEndDate(transactionStartDate.value),
			endDateMax = getDateInputFormat(new Date());

		const startTransElementConfig = {
				...transactionStartDateConf.elementConfig,
				max: startDateMax,
			},
			endTransElementConfig = {
				...transactionEndDateConf.elementConfig,
				min: endDateMin,
				max: endDateMax,
			};
		return (
			<form ref={this.form}>
				<div className="row">
					<div className="col-xs-3">
						<Input
							elementType={emailConf.elementType}
							elementConfig={emailConf.elementConfig}
							value={email.value}
							changed={this.emailHandler}
							invalid={!email.valid}
							touched={email.touched}
							label={emailConf.label}
						/>
						{email.displayErrors.isEmailError && <p className="error-message">Invalid Email</p>}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={creditFirstConf.elementType}
							elementConfig={creditFirstConf.elementConfig}
							value={creditFirst.value}
							changed={this.creditFirstHandler}
							invalid={!creditFirst.valid}
							touched={creditFirst.touched}
							label={creditFirstConf.label}
							InputLabelProps={{
								shrink: true,
							}}
						/>
						{creditFirst.displayErrors.isMinLengthError && (
							<p className="error-message">Minimum 6 numbers.</p>
						)}
						{creditFirst.displayErrors.isMaxLengthError && (
							<p className="error-message">Maximum 6 numbers.</p>
						)}
						{creditFirst.displayErrors.isNumber && (
							<p className="error-message">Needs to be a number.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={creditLastConf.elementType}
							elementConfig={creditLastConf.elementConfig}
							value={creditLast.value}
							changed={this.creditLastHandler}
							invalid={!creditLast.valid}
							touched={creditLast.touched}
							label={creditLastConf.label}
							InputLabelProps={{
								shrink: true,
							}}
						/>
						{creditLast.displayErrors.isMinLengthError && (
							<p className="error-message">Minimum 4 numbers.</p>
						)}
						{creditLast.displayErrors.isMaxLengthError && (
							<p className="error-message">Maximum 4 numbers.</p>
						)}
						{creditLast.displayErrors.isNumber && (
							<p className="error-message">Needs to be a number.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={usernameConf.elementType}
							elementConfig={usernameConf.elementConfig}
							value={username.value}
							changed={this.usernameHandler}
							invalid={!username.valid}
							touched={username.touched}
							label={usernameConf.label}
						/>
						{username.displayErrors.isMinLengthError && (
							<p className="error-message">Username needs to be at least 3 characters.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={firstNameConf.elementType}
							elementConfig={firstNameConf.elementConfig}
							value={firstName.value}
							changed={this.firstNameHandler}
							invalid={!firstName.valid}
							touched={firstName.touched}
							label={firstNameConf.label}
						/>
						{firstName.displayErrors.isMinLengthError && (
							<p className="error-message">Minimum 2 characters.</p>
						)}
						{firstName.displayErrors.isCharError && (
							<p className="error-message">Format is not valid.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={lastNameConf.elementType}
							elementConfig={lastNameConf.elementConfig}
							value={lastName.value}
							changed={this.lastNameHandler}
							invalid={!lastName.valid}
							touched={lastName.touched}
							label={lastNameConf.label}
						/>
						{lastName.displayErrors.isMinLengthError && (
							<p className="error-message">Minimum 2 characters.</p>
						)}
						{lastName.displayErrors.isCharError && (
							<p className="error-message">Format is not valid.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={transactionStartDateConf.elementType}
							elementConfig={startTransElementConfig}
							value={transactionStartDate.value}
							changed={this.transactionStartDateHandler}
							invalid={!transactionStartDate.valid}
							touched={transactionStartDate.touched}
							label={transactionStartDateConf.label}
						/>
						{transactionStartDate.displayErrors.isStartDateError && (
							<p className="error-message">Must be earlier than end date.</p>
						)}
						{transactionStartDate.displayErrors.greaterThanToday && (
							<p className="error-message">Can not be later than today's date.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={transactionEndDateConf.elementType}
							elementConfig={endTransElementConfig}
							value={transactionEndDate.value}
							changed={this.transactionEndDateHandler}
							invalid={!transactionEndDate.valid}
							touched={transactionEndDate.touched}
							label={transactionEndDateConf.label}
						/>
						{transactionEndDate.displayErrors.isEndDateError && (
							<p className="error-message">Must be later than start start date.</p>
						)}
						{transactionEndDate.displayErrors.greaterThanToday && (
							<p className="error-message">Can not be later than today's date.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={probillerMemberIdConf.elementType}
							elementConfig={probillerMemberIdConf.elementConfig}
							value={probillerMemberId.value}
							changed={this.probillerMemberIdHandler}
							invalid={!probillerMemberId.valid}
							touched={probillerMemberId.touched}
							label={probillerMemberIdConf.label}
						/>
						{probillerMemberId.displayErrors.isNumError && (
							<p className="error-message">Must be a number.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={probillerTransactionIdConf.elementType}
							elementConfig={probillerTransactionIdConf.elementConfig}
							value={probillerTransactionId.value}
							changed={this.probillerTransactionIdHandler}
							invalid={!probillerTransactionId.valid}
							touched={probillerTransactionId.touched}
							label={probillerTransactionIdConf.label}
						/>
						{probillerTransactionId.displayErrors.isNumError && (
							<p className="error-message">Must be a number.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={billerMemberIdConf.elementType}
							elementConfig={billerMemberIdConf.elementConfig}
							value={billerMemberId.value}
							changed={this.billerMemberIdHandler}
							invalid={!billerMemberId.valid}
							touched={billerMemberId.touched}
							label={billerMemberIdConf.label}
						/>
						{billerMemberId.displayErrors.isAlphaNumError && (
							<p className="error-message">Must be alphanumeric.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={billerTransactionIdConf.elementType}
							elementConfig={billerTransactionIdConf.elementConfig}
							value={billerTransactionId.value}
							changed={this.billerTransactionIdHandler}
							invalid={!billerTransactionId.valid}
							touched={billerTransactionId.touched}
							label={billerTransactionIdConf.label}
						/>
						{billerTransactionId.displayErrors.isAlphaNumError && (
							<p className="error-message">Must be alphanumeric.</p>
						)}
					</div>
					<div className="col-xs-3">
						<Input
							elementType={probillerSubscriptionIdConf.elementType}
							elementConfig={probillerSubscriptionIdConf.elementConfig}
							value={probillerSubscriptionId.value}
							changed={this.probillerSubscriptionIdHandler}
							invalid={!probillerSubscriptionId.valid}
							touched={probillerSubscriptionId.touched}
							label={probillerSubscriptionIdConf.label}
						/>
						{probillerSubscriptionId.displayErrors.isNumError && (
							<p className="error-message">Must be a number.</p>
						)}
					</div>
					<div className="col-xs-9" />
					<div className="col-xs-3">
						<div className="input-container">
							<button
								type="submit"
								className={`std-btn primary ${!isFormValid ? 'disabled' : ''}`}
								style={{ width: '100%' }}
								disabled={!isFormValid}
								onClick={this.onSubmitHandler}
							>
								submit
							</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		email: searchFormEmail({ state }),
		creditFirst: searchFormCreditFirst({ state }),
		creditLast: searchFormCreditLast({ state }),
		username: searchFormUsername({ state }),
		firstName: searchFormFirstName({ state }),
		lastName: searchFormLastName({ state }),
		transactionStartDate: searchFormTransactionStartDate({ state }),
		transactionEndDate: searchFormTransactionEndDate({ state }),
		probillerMemberId: searchFormProbillerMemberId({ state }),
		probillerTransactionId: searchFormProbillerTransactionId({ state }),
		billerMemberId: searchFormBillerMemberId({ state }),
		billerTransactionId: searchFormBillerTransactionId({ state }),
		probillerSubscriptionId: searchFormProbillerSubscriptionId({ state }),
		isFormValid: isFormValid({ state }),
	};
};

export default connect(mapStateToProps)(SearchForm);

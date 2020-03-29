//moment JS
import moment from 'moment';
//lodash
import { isEmpty } from 'lodash';

// return the given object without the provided key
export const objectWithoutKey = (object, key) => {
	const { [key]: deletedKey, ...otherKeys } = object;
	return otherKeys;
};

// the following function is to capitalize the first letter of the given string
export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

//get the target date based on how many days, weeks, month or years then display it as (Jul 9th, 2021) or (Jul 9, 2021) based on isWithoutSuffix argument
export const getTargetDate = ({
	number,
	cycleType,
	givenDate = new Date(),
	isWithoutSuffix = false,
	isBackendFormat = false,
}) => {
	let today = givenDate;
	switch (cycleType) {
		case 'days':
			today.setDate(today.getDate() + parseInt(number));
			break;
		case 'weeks':
			today.setDate(today.getDate() + parseInt(number) * 7);
			break;
		case 'months':
			today.setMonth(today.getMonth() + parseInt(number));
			break;
		case 'years':
			today.setFullYear(today.getFullYear() + parseInt(number));
			break;
		default:
			return moment(today, 'YYYY-MM-DD HH:mm Z').format('MMM Do, YYYY');
	}
	if (isWithoutSuffix) {
		return moment(today, 'YYYY-MM-DD HH:mm Z').format('MMM DD, YYYY');
	}
	if (isBackendFormat) {
		return getDateInputFormat(today);
	}
	return moment(today, 'YYYY-MM-DD HH:mm Z').format('MMM Do, YYYY');
};

export const getCurrencySymbol = (currencyText) => {
	switch (currencyText) {
		case 'GBP':
			return '£';
		case 'EUR':
			return '€';
		case 'USD':
			return '$';
		default:
			return currencyText;
	}
};

//get the latest transaction of the given subscription
export const getSubscriptionLatestTransaction = (currentSubscription) => {
	let trialType = '',
		latestTransaction;

	if (currentSubscription.transactions) {
		latestTransaction = currentSubscription.transactions.sort((a, b) =>
			moment
				.utc(a.issueDate, 'YYYY-MM-DD HH:mm:ss')
				.isAfter(moment.utc(b.issueDate, 'YYYY-MM-DD HH:mm:ss'))
				? -1
				: 1
		)[0];

		if (currentSubscription.trial === '1' && currentSubscription.trialType === null) {
			trialType = 'one-day';
		} else if (
			currentSubscription.trial === '1' &&
			(currentSubscription.trialType === 'multiDay' ||
				currentSubscription.trialType === 'multiDayPrepaidOnly')
		) {
			trialType = 'two-day';
		}
	}
	return { latestTransaction, trialType };
};

export const getLastSuccessfulTransaction = function(subscriptionId, transactionArray) {
	let latestTransactionCache = {},
		latestTransaction;

	// No subscription ID or transactions
	if (!subscriptionId || (transactionArray && !transactionArray.length)) {
		return null;
	}

	// If it's cached, use the result from that instead
	// Save some CPU cycles
	if (latestTransactionCache[subscriptionId]) {
		return latestTransactionCache[subscriptionId];
	}

	// Get the last successful (non-failed, successful transactions can become "refund" or "chargeback") transaction
	if (transactionArray) {
		let tempSuccessfulTransactions = transactionArray.filter(function(transaction) {
			return transaction.status !== 'FAILED';
		});

		latestTransaction = tempSuccessfulTransactions[tempSuccessfulTransactions.length - 1];
	}

	// Add the results to the cache
	latestTransactionCache[subscriptionId] = latestTransaction;

	return latestTransaction;
};

export const getMonthString = (number) => {
	let month = {
		'01': 'Jan',
		'02': 'Feb',
		'03': 'Mar',
		'04': 'Apr',
		'05': 'May',
		'06': 'Jun',
		'07': 'Jul',
		'08': 'Aug',
		'09': 'Sep',
		'10': 'Oct',
		'11': 'Nov',
		'12': 'Dec',
	};
	return month[number];
};

//return date for the date input type (2021-07-09)
export const getDateInputFormat = (date) => {
	return moment(date).format('YYYY-MM-DD');
};

//calculate how many days between 2 dates
export const getDaysDifference = (toDate, fromDate) => {
	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	return Math.ceil(Math.abs((toDate.getTime() - fromDate.getTime()) / oneDay));
};

//sort the given array of object based on an object property
export const sortArrayBasedOnObjectProperty = ({ array, objectProperty }) =>
	array.sort((a, b) => {
		if (a[objectProperty] < b[objectProperty]) {
			return -1;
		}
		if (a[objectProperty] > b[objectProperty]) {
			return 1;
		}
		return 0;
	});

//returns an object of arrays based on the given key
export const groupBy = ({ array, key }) => {
	return array.reduce((result, currentValue) => {
		(result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
		return result;
	}, {});
};

//returns an object of query params
export const getQueryParams = (params) => {
	const queryParams = new URLSearchParams(params),
		paramsObj = {};

	for (let [key, value] of queryParams.entries()) {
		paramsObj[key] = value;
	}
	return paramsObj;
};

export const getAvailableGroups = () => {
	return {
		technical: {
			id: 3,
			name: 'technical',
			roles: ['ROLE_AGENT'],
		},
		billing: {
			id: 4,
			name: 'billing',
			roles: ['ROLE_AGENT'],
		},
		'free account': {
			id: 11,
			name: 'free account',
			roles: ['ROLE_FREE_ACCOUNT'],
		},
	};
};

export const checkIfUserIsAdmin = (currentLoggedInUser) => {
	const adminRoles = ['ROLE_ADMIN', 'ROLE_AGENT'];

	if (isEmpty(currentLoggedInUser)) {
		return false;
	}
	return adminRoles.every((el) => currentLoggedInUser.roles.indexOf(el) !== -1);
};

export const checkIfUserIsAnAgent = (currentLoggedInUser) => {
	const agentRoles = ['ROLE_AGENT', 'ROLE_USER'];

	if (isEmpty(currentLoggedInUser)) {
		return false;
	}
	return agentRoles.every((el) => currentLoggedInUser.roles.indexOf(el) !== -1);
};

export const checkIfUserIsFreeAccount = (currentLoggedInUser) => {
	if (isEmpty(currentLoggedInUser)) {
		return false;
	}
	return !!currentLoggedInUser.roles.find((el) => el === 'ROLE_FREE_ACCOUNT');
};

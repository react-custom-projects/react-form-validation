import { getDaysDifference, getDateInputFormat } from './Helpers';

// used to check if the given field is required
export const validateRequired = (inputValue) => {
	return inputValue.trim() === '';
};

// used to validate the minLength of the given field
export const validateMinLength = (inputValue, number) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (inputValue.trim().length < number) {
		isError = true;
	}
	return isError;
};

// used to validate the maxLength of the given field
export const validateMaxLength = (inputValue, number) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (inputValue.trim().length > number) {
		isError = true;
	}
	return isError;
};

// used to validate regEx
export const validateRegEx = (inputValue, regEx) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!regEx.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

// used to check if positive number
export const validateNumber = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!/^[0-9]*$/.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

// used to check if negative or positive number
export const validateNegativeOrPositiveNumber = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!/^-?\d*$/.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

//used to check the maximum decimal places 2
export const validateMaxDecimal2 = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!/^\d+(\.\d{0,2})?$/.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

//used to accept number with optional dot (.)
export const validateNumberWithDot = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!/^[0-9]\d*(?:\.\d+)?$/.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

// used to check if character
export const validateChar = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!/^[A-Za-z]+$/.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

// used to check alpha numeric with dots (.)
export const validateAlphaNumeric = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!/^[a-zA-Z0-9.]*$/.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

export const validateEmail = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (
		!/^([a-zA-Z0-9_\-\.]+)@(([a-zA-Z0-9\-]+\.)+)([a-zA-Z]{2,4})$/.test(inputValue.trim())
	) {
		isError = true;
	}
	return isError;
};

export const validateMaxSubscriptionError = (chosenCycle, validForValue, years) => {
	let isMaxSubscriptionError = false;
	if (years === 10) {
		if (chosenCycle === 'days' && validForValue > 3650) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'weeks' && validForValue > 521) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'months' && validForValue > 121) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'years' && validForValue > 10) {
			isMaxSubscriptionError = true;
		}
	} else if (years === 1) {
		if (chosenCycle === 'days' && validForValue > 365) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'weeks' && validForValue > 52) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'months' && validForValue > 12) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'years' && validForValue > 1) {
			isMaxSubscriptionError = true;
		}
	}
	return isMaxSubscriptionError;
};

export const validateMaxSubscriptionErrorFromGivenDate = (
	chosenCycle,
	validForValue,
	years,
	givenDate
) => {
	const difference = getDaysDifference(givenDate, new Date());
	let isMaxSubscriptionError = false;
	if (years === 10) {
		if (chosenCycle === 'days' && validForValue > 3650 + difference) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'weeks' && validForValue > 521 + difference) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'months' && validForValue > 121 + difference) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'years' && validForValue > 10 + difference) {
			isMaxSubscriptionError = true;
		}
	} else if (years === 1) {
		if (chosenCycle === 'days' && validForValue > 365 + difference) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'weeks' && validForValue > 52 + difference) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'months' && validForValue > 12 + difference) {
			isMaxSubscriptionError = true;
		} else if (chosenCycle === 'years' && validForValue > 1 + difference) {
			isMaxSubscriptionError = true;
		}
	}
	return isMaxSubscriptionError;
};

export const validateToDateLessThanFromDate = (toDate, fromDate) => {
	let isError = false;
	if (toDate.setHours(0, 0, 0, 0) < fromDate.setHours(0, 0, 0, 0)) {
		isError = true;
	}
	return isError;
};

//validate minimum date to today's date
export const validateTodayIsMinDate = (date) => {
	const today = new Date();
	let isError = false;
	if (new Date(date) < today) {
		isError = true;
	}
	return isError;
};

//set minimum date of the end date picker (exporting this method because it will be used to set the html)
export const setMinimumEndDate = (startDate) => {
	let minDate = '';
	if (startDate.length > 0) {
		minDate = startDate;
	}
	return minDate;
};

//set maximum date of the start date picker (exporting this method because it will be used to set the html)
export const setMaximumStartDate = (endDate) => {
	let maxDate = getDateInputFormat(new Date());
	if (endDate.length > 0) {
		maxDate = endDate;
	}
	return maxDate;
};

//validate start date is earlier than end date
const validateStartDate = (startDate, endDate) => {
	let isError = false;
	if (Date.parse(startDate) > Date.parse(endDate)) {
		isError = true;
	}
	return isError;
};

//validate end date is later than start date
const validateEndDate = (startDate, endDate) => {
	return Date.parse(endDate) < Date.parse(startDate);
};

//validate date is not greater than today's date
const validateNotGreaterThanToday = (value) => {
	return value > getDateInputFormat(new Date());
};

export const validateStartEndDate = (state, startDate, endDate) => {
	let isStartDateError = false;
	let isEndDateError = false;
	const startDateGreaterThanToday = validateNotGreaterThanToday(startDate);
	const endDateGreaterThanToday = validateNotGreaterThanToday(endDate);
	if (startDate && endDate) {
		isStartDateError = validateStartDate(startDate, endDate);
		isEndDateError = validateEndDate(startDate, endDate);
	}
	return [startDateGreaterThanToday, endDateGreaterThanToday, isStartDateError, isEndDateError];
};

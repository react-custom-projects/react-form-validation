//utility
import { updateObject } from '../utility';
//action types
import {
	SET_BILLER_MEM_ID_PROPERTIES,
	SET_BILLER_TRAN_ID_PROPERTIES,
	SET_CREDIT_FIRST_PROPERTIES,
	SET_CREDIT_LAST_PROPERTIES,
	SET_EMAIL_PROPERTIES,
	SET_FIRST_NAME_PROPERTIES,
	SET_LAST_NAME_PROPERTIES,
	SET_PRO_MEM_ID_PROPERTIES,
	SET_PRO_SUB_ID_PROPERTIES,
	SET_PRO_TRAN_ID_PROPERTIES,
	SET_TRANSACTION_END_PROPERTIES,
	SET_TRANSACTION_START_PROPERTIES,
	SET_USERNAME_PROPERTIES,
} from '../actionTypes';
//custom validators
import {
	validateAlphaNumeric,
	validateMaxLength,
	validateMinLength,
	validateNumber,
	validateRegEx,
} from '../../constants/CustomValidators';

const initialState = {
	email: {
		value: '',
		displayErrors: {
			isEmailError: false,
		},
		valid: true,
		touched: false,
	},
	creditFirst: {
		value: '',
		displayErrors: {
			isMinLengthError: false,
			isMaxLengthError: false,
			isNumber: false,
		},
		valid: true,
		touched: false,
	},
	creditLast: {
		value: '',
		displayErrors: {
			isMinLengthError: false,
			isMaxLengthError: false,
			isNumber: false,
		},
		valid: true,
		touched: false,
	},
	username: {
		value: '',
		displayErrors: {
			isMinLengthError: false,
		},
		valid: true,
		touched: false,
	},
	firstName: {
		value: '',
		displayErrors: {
			isMinLengthError: false,
			isCharError: false,
		},
		valid: true,
		touched: false,
	},
	lastName: {
		value: '',
		displayErrors: {
			isMinLengthError: false,
			isCharError: false,
		},
		valid: true,
		touched: false,
	},
	transactionStartDate: {
		value: '',
		valid: true,
	},
	transactionEndDate: {
		value: '',
		valid: true,
	},
	probillerMemberId: {
		value: '',
		displayErrors: {
			isNumError: false,
		},
		valid: true,
		touched: false,
	},
	probillerTransactionId: {
		value: '',
		displayErrors: {
			isNumError: false,
		},
		valid: true,
		touched: false,
	},
	billerMemberId: {
		value: '',
		displayErrors: {
			isAlphaNumError: false,
		},
		valid: true,
		touched: false,
	},
	billerTransactionId: {
		value: '',
		displayErrors: {
			isAlphaNumError: false,
		},
		valid: true,
		touched: false,
	},
	probillerSubscriptionId: {
		value: '',
		displayErrors: {
			isNumError: false,
		},
		valid: true,
		touched: false,
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// set input properties
		case SET_EMAIL_PROPERTIES: {
			const isEmailError = validateRegEx(
				action.value,
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
			);
			return updateObject(state, {
				email: {
					value: action.value,
					valid: !isEmailError,
					touched: action.value.length > 0,
					displayErrors: { isEmailError: isEmailError },
				},
			});
		}
		case SET_CREDIT_FIRST_PROPERTIES: {
			const displayErrors = {
					isMinLengthError: validateMinLength(action.value, 6),
					isMaxLengthError: validateMaxLength(action.value, 6),
					isNumber: validateNumber(action.value),
				},
				isValid =
					!displayErrors.isMinLengthError &&
					!displayErrors.isMaxLengthError &&
					!displayErrors.isNumber;
			return updateObject(state, {
				creditFirst: {
					value: action.value,
					valid: isValid,
					touched: action.value.length > 0,
					displayErrors: displayErrors,
				},
			});
		}
		case SET_CREDIT_LAST_PROPERTIES: {
			const displayErrors = {
					isMinLengthError: validateMinLength(action.value, 4),
					isMaxLengthError: validateMaxLength(action.value, 4),
					isNumber: validateNumber(action.value),
				},
				isValid =
					!displayErrors.isMinLengthError &&
					!displayErrors.isMaxLengthError &&
					!displayErrors.isNumber;
			return updateObject(state, {
				creditLast: {
					value: action.value,
					valid: isValid,
					touched: action.value.length > 0,
					displayErrors: displayErrors,
				},
			});
		}
		case SET_USERNAME_PROPERTIES: {
			const isMinLength = validateMinLength(action.value, 3);
			return updateObject(state, {
				username: {
					value: action.value,
					valid: !isMinLength,
					touched: action.value.length > 0,
					displayErrors: { isMinLengthError: isMinLength },
				},
			});
		}
		case SET_FIRST_NAME_PROPERTIES: {
			const displayErrors = {
					isMinLengthError: validateMinLength(action.value, 2),
					isCharError: validateChar(action.value),
				},
				isValid = !displayErrors.isMinLengthError && !displayErrors.isCharError;
			return updateObject(state, {
				firstName: {
					value: action.value,
					valid: isValid,
					touched: action.value.length > 0,
					displayErrors: displayErrors,
				},
			});
		}
		case SET_LAST_NAME_PROPERTIES: {
			const displayErrors = {
					isMinLengthError: validateMinLength(action.value, 2),
					isCharError: validateChar(action.value),
				},
				isValid = !displayErrors.isMinLengthError && !displayErrors.isCharError;
			return updateObject(state, {
				lastName: {
					value: action.value,
					valid: isValid,
					touched: action.value.length > 0,
					displayErrors: displayErrors,
				},
			});
		}
		case SET_TRANSACTION_START_PROPERTIES:
			return updateObject(state, {
				transactionStartDate: { ...state.transactionStartDate, value: action.value },
			});
		case SET_TRANSACTION_END_PROPERTIES:
			return updateObject(state, {
				transactionEndDate: { ...state.transactionEndDate, value: action.value },
			});
		case SET_PRO_MEM_ID_PROPERTIES: {
			const isNumError = validateNumber(action.value);
			return updateObject(state, {
				probillerMemberId: {
					value: action.value,
					valid: !isNumError,
					touched: action.value.length > 0,
					displayErrors: { isNumError: isNumError },
				},
			});
		}
		case SET_PRO_TRAN_ID_PROPERTIES: {
			const isNumError = validateNumber(action.value);
			return updateObject(state, {
				probillerTransactionId: {
					value: action.value,
					valid: !isNumError,
					touched: action.value.length > 0,
					displayErrors: { isNumError: isNumError },
				},
			});
		}
		case SET_BILLER_MEM_ID_PROPERTIES: {
			const isAlphaNumError = validateAlphaNumeric(action.value);
			return updateObject(state, {
				billerMemberId: {
					value: action.value,
					valid: !isAlphaNumError,
					touched: action.value.length > 0,
					displayErrors: { isAlphaNumError: isAlphaNumError },
				},
			});
		}
		case SET_BILLER_TRAN_ID_PROPERTIES: {
			const isAlphaNumError = validateAlphaNumeric(action.value);
			return updateObject(state, {
				billerTransactionId: {
					value: action.value,
					valid: !isAlphaNumError,
					touched: action.value.length > 0,
					displayErrors: { isAlphaNumError: isAlphaNumError },
				},
			});
		}
		case SET_PRO_SUB_ID_PROPERTIES: {
			const isNumError = validateNumber(action.value);
			return updateObject(state, {
				probillerSubscriptionId: {
					value: action.value,
					valid: !isNumError,
					touched: action.value.length > 0,
					displayErrors: { isNumError: isNumError },
				},
			});
		}
		default:
			return state;
	}
};

export default reducer;

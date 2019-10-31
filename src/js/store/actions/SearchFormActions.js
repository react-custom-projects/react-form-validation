/* ********set value actions******** */
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

export const setEmailProperties = (value) => ({
	type: SET_EMAIL_PROPERTIES,
	value: value,
});

export const setCreditFirstProperties = (value) => ({
	type: SET_CREDIT_FIRST_PROPERTIES,
	value: value,
});

export const setCreditLastProperties = (value) => ({
	type: SET_CREDIT_LAST_PROPERTIES,
	value: value,
});

export const setUsernameProperties = (value) => ({
	type: SET_USERNAME_PROPERTIES,
	value: value,
});

export const setFirstNameProperties = (value) => ({
	type: SET_FIRST_NAME_PROPERTIES,
	value: value,
});

export const setLastNameProperties = (value) => ({
	type: SET_LAST_NAME_PROPERTIES,
	value: value,
});

export const setTransactionStartProperties = (value) => ({
	type: SET_TRANSACTION_START_PROPERTIES,
	value: value,
});

export const setTransactionEndProperties = (value) => ({
	type: SET_TRANSACTION_END_PROPERTIES,
	value: value,
});

export const setProMemIdProperties = (value) => ({
	type: SET_PRO_MEM_ID_PROPERTIES,
	value: value,
});

export const setProTranIdProperties = (value) => ({
	type: SET_PRO_TRAN_ID_PROPERTIES,
	value: value,
});

export const setBillerMemIdProperties = (value) => ({
	type: SET_BILLER_MEM_ID_PROPERTIES,
	value: value,
});

export const setBillerTranIdProperties = (value) => ({
	type: SET_BILLER_TRAN_ID_PROPERTIES,
	value: value,
});

export const setProSubIdProperties = (value) => ({
	type: SET_PRO_SUB_ID_PROPERTIES,
	value: value,
});

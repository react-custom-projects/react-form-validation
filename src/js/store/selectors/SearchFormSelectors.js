export const searchFormEmail = ({ state }) => state.searchForm.email;

export const searchFormCreditFirst = ({ state }) => state.searchForm.creditFirst;

export const searchFormCreditLast = ({ state }) => state.searchForm.creditLast;

export const searchFormUsername = ({ state }) => state.searchForm.username;

export const searchFormFirstName = ({ state }) => state.searchForm.firstName;

export const searchFormLastName = ({ state }) => state.searchForm.lastName;

export const searchFormTransactionStartDate = ({ state }) => state.searchForm.transactionStartDate;

export const searchFormTransactionEndDate = ({ state }) => state.searchForm.transactionEndDate;

export const searchFormProbillerMemberId = ({ state }) => state.searchForm.probillerMemberId;

export const searchFormProbillerTransactionId = ({ state }) =>
	state.searchForm.probillerTransactionId;

export const searchFormBillerMemberId = ({ state }) => state.searchForm.billerMemberId;

export const searchFormBillerTransactionId = ({ state }) => state.searchForm.billerTransactionId;

export const searchFormProbillerSubscriptionId = ({ state }) =>
	state.searchForm.probillerSubscriptionId;

export const isFormValid = ({ state }) => {
	const searchForm = {
		...state.searchForm,
	};
	let inputFieldsAreValid = true,
		inputFieldsValue = [];
	for (let inputIdentifier in searchForm) {
		inputFieldsAreValid = searchForm[inputIdentifier].valid && inputFieldsAreValid;
		inputFieldsValue.push(searchForm[inputIdentifier].value);
	}
	// at least one input has value
	const hasValue = inputFieldsValue.find((el) => {
		return el.length > 0;
	});
	return inputFieldsAreValid && typeof hasValue !== 'undefined';
};

import { combineReducers } from 'redux';
import searchForm from './reducers/SearchFormReducer';

const rootReducer = combineReducers({
	searchForm,
});

export default rootReducer;

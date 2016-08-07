import { combineReducers } from 'redux';
import home from './home'


function getReducers(){
	return({
		home,
	})
}

const rootReducer = combineReducers(getReducers());

export default rootReducer;
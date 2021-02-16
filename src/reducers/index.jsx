import * as Types from '../actions/Types';
import { combineReducers } from 'redux';

const initialState = {
	nickname: ''
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.SIGN_IN_REQUEST:
			return {
				...state,
				nickname: action.payload.nickname
			};
		default:
			return state;
	}
}

const reducers = combineReducers({
	user: userReducer
});

export default reducers;
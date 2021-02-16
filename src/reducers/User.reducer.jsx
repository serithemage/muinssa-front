import * as Types from '../actions/Types';

const initialState = {
	nickname: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case Types.SIGN_IN_REQUEST:
			return {
				...state,
				nickname: action.payload.nickname
			};
		default:
			return state;
	}
};
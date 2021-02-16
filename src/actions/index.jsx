import * as Types from './Types';

export const login = (nickname) => ({
	type: Types.SIGN_IN_REQUEST,
	payload: {
		nickname
	}
});
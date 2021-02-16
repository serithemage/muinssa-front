import * as Types from './Types';

export const signIn = (nickname) => ({
	type: Types.SIGN_IN_REQUEST,
	payload: {
		nickname
	}
});
import * as types from './constants';

export const fetchUserData = (payload) => ({ type: types.FETCH_USER_DATA, payload, });
export const getUserDetailsById = (payload) => ({ type: types.GET_USER_DETAILS_BY_ID, payload, });
export const getUserBySearch = (payload) => ({ type: types.GET_USER_DETAILS_BY_SEARCH, payload, });

import { getUsers, getRepositories } from "../../services/searchService";

import {
	FETCH_USERS_DATA_REQUEST,
	FETCH_USERS_DATA_SUCCESS,
	FETCH_USERS_DATA_FAILURE,
	FETCH_MORE_USERS_DATA_REQUEST,
	FETCH_MORE_USERS_DATA_SUCCESS,
	FETCH_MORE_USERS_DATA_FAILURE,
	FETCH_REPOSITORIES_DATA_REQUEST,
	FETCH_REPOSITORIES_DATA_SUCCESS,
	FETCH_REPOSITORIES_DATA_FAILURE,
	FETCH_MORE_REPOSITORIES_DATA_REQUEST,
	FETCH_MORE_REPOSITORIES_DATA_SUCCESS,
	FETCH_MORE_REPOSITORIES_DATA_FAILURE,
} from "./types";

// Fetch Users Data
export const fetchUsersDataRequest = () => {
	return {
		type: FETCH_USERS_DATA_REQUEST,
	};
};

export const fetchUsersDataSuccess = (data) => {
	return {
		type: FETCH_USERS_DATA_SUCCESS,
		payload: data,
	};
};

export const fetchUsersDataFailure = (error) => {
	return {
		type: FETCH_USERS_DATA_FAILURE,
		payload: error,
	};
};

export const fetchUsersData = (query) => {
	return async function (dispatch) {
		try {
			dispatch(fetchUsersDataRequest());

			const data = await getUsers(query);
			dispatch(fetchUsersDataSuccess(data));
		} catch (ex) {
			dispatch(fetchUsersDataFailure(ex));
			console.log("Error: ", ex);
		}
	};
};

// Fetch More Users Data
export const fetchMoreUsersDataRequest = () => {
	return {
		type: FETCH_MORE_USERS_DATA_REQUEST,
	};
};

export const fetchMoreUsersDataSuccess = (data) => {
	return {
		type: FETCH_MORE_USERS_DATA_SUCCESS,
		payload: data,
	};
};

export const fetchMoreUsersDataFailure = (error) => {
	return {
		type: FETCH_MORE_USERS_DATA_FAILURE,
		payload: error,
	};
};

export const fetchMoreUsersData = (query) => {
	return async function (dispatch) {
		try {
			dispatch(fetchMoreUsersDataRequest());

			const data = await getUsers(query);
			dispatch(fetchMoreUsersDataSuccess(data));
		} catch (ex) {
			dispatch(fetchMoreUsersDataFailure(ex));
			console.log("Error: ", ex);
		}
	};
};

// Fetch Repositories Data
export const fetchRepositoriesDataRequest = () => {
	return {
		type: FETCH_REPOSITORIES_DATA_REQUEST,
	};
};

export const fetchRepositoriesDataSuccess = (data) => {
	return {
		type: FETCH_REPOSITORIES_DATA_SUCCESS,
		payload: data,
	};
};

export const fetchRepositoriesDataFailure = (error) => {
	return {
		type: FETCH_REPOSITORIES_DATA_FAILURE,
		payload: error,
	};
};

export const fetchRepositoriesData = (query) => {
	return async function (dispatch) {
		try {
			dispatch(fetchRepositoriesDataRequest());

			const data = await getRepositories(query);
			dispatch(fetchRepositoriesDataSuccess(data));
		} catch (ex) {
			dispatch(fetchRepositoriesDataFailure(ex));
			console.log("Error: ", ex);
		}
	};
};

// Fetch More Repositories Data
export const fetchMoreRepositoriesDataRequest = () => {
	return {
		type: FETCH_MORE_REPOSITORIES_DATA_REQUEST,
	};
};

export const fetchMoreRepositoriesDataSuccess = (data) => {
	return {
		type: FETCH_MORE_REPOSITORIES_DATA_SUCCESS,
		payload: data,
	};
};

export const fetchMoreRepositoriesDataFailure = (error) => {
	return {
		type: FETCH_MORE_REPOSITORIES_DATA_FAILURE,
		payload: error,
	};
};

export const fetchMoreRepositoriesData = (query) => {
	return async function (dispatch) {
		try {
			dispatch(fetchMoreRepositoriesDataRequest());

			const data = await getRepositories(query);
			dispatch(fetchMoreRepositoriesDataSuccess(data));
		} catch (ex) {
			dispatch(fetchMoreRepositoriesDataFailure(ex));
			console.log("Error: ", ex);
		}
	};
};

import { getUsers, getRepositories } from "../../services/searchService";
import { store } from "../store";

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

export const fetchUsersData = (search) => {
	return async function (dispatch) {
		try {
			dispatch(fetchUsersDataRequest());

			const { per_page, page } = store.getState().search.usersData.paginate;
			const query = `?q=${search}&per_page=${per_page}&page=${page}`;
			const { data } = await getUsers(query);
			dispatch(fetchUsersDataSuccess(data));
		} catch (ex) {
			dispatch(fetchUsersDataFailure(ex.response));
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

export const fetchMoreUsersData = (search) => {
	return async function (dispatch) {
		try {
			dispatch(fetchMoreUsersDataRequest());

			const { per_page, page } = store.getState().search.usersData.paginate;
			const query = `?q=${search}&per_page=${per_page}&page=${page}`;
			const { data } = await getUsers(query);
			dispatch(fetchMoreUsersDataSuccess(data));
		} catch (ex) {
			dispatch(fetchMoreUsersDataFailure(ex.response));
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

export const fetchRepositoriesData = (search) => {
	return async function (dispatch) {
		try {
			dispatch(fetchRepositoriesDataRequest());

			const { per_page, page } = store.getState().search.repositoriesData.paginate;
			const query = `?q=${search}&per_page=${per_page}&page=${page}`;
			const { data } = await getRepositories(query);
			dispatch(fetchRepositoriesDataSuccess(data));
		} catch (ex) {
			dispatch(fetchRepositoriesDataFailure(ex.response));
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

export const fetchMoreRepositoriesData = (search) => {
	return async function (dispatch) {
		try {
			dispatch(fetchMoreRepositoriesDataRequest());

			const { per_page, page } = store.getState().search.repositoriesData.paginate;
			const query = `?q=${search}&per_page=${per_page}&page=${page}`;
			const { data } = await getRepositories(query);
			dispatch(fetchMoreRepositoriesDataSuccess(data));
		} catch (ex) {
			dispatch(fetchMoreRepositoriesDataFailure(ex.response));
		}
	};
};

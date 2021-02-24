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

const initialState = {
	usersData: {
		loading: true,
		data: {},
		error: null,
		paginate: {
			loading: false,
			per_page: 100,
			page: 1,
			maxReached: false,
		},
	},
	repositoriesData: {
		loading: true,
		data: {},
		error: null,
		paginate: {
			loading: false,
			per_page: 100,
			page: 1,
			maxReached: false,
		},
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// Fetch Users Data
		case FETCH_USERS_DATA_REQUEST:
			return {
				...state,
				usersData: { ...state.usersData, loading: true, error: null, paginate: { ...state.usersData.paginate, page: 1, maxReached: false } },
			};
		case FETCH_USERS_DATA_SUCCESS:
			return { ...state, usersData: { ...state.usersData, loading: false, data: action.payload } };
		case FETCH_USERS_DATA_FAILURE:
			return { ...state, usersData: { ...state.usersData, loading: false, data: {}, error: action.payload } };

		// Fetch More Users Data
		case FETCH_MORE_USERS_DATA_REQUEST:
			return {
				...state,
				usersData: {
					...state.usersData,
					error: null,
					paginate: { ...state.usersData.paginate, loading: true, page: state.usersData.paginate.page + 1 },
				},
			};
		case FETCH_MORE_USERS_DATA_SUCCESS:
			return {
				...state,
				usersData: {
					...state.usersData,
					data: { ...state.usersData.data, items: [...state.usersData.data.items, ...action.payload.items] },
					paginate: { ...state.usersData.paginate, loading: false, maxReached: action.payload.items.length === 0 ? true : false },
				},
			};
		case FETCH_MORE_USERS_DATA_FAILURE:
			return {
				...state,
				usersData: {
					...state.usersData,
					loading: false,
					data: {},
					error: action.payload,
					paginate: { ...state.usersData.paginate, loading: false },
				},
			};

		// Fetch Repositories Data
		case FETCH_REPOSITORIES_DATA_REQUEST:
			return {
				...state,
				repositoriesData: {
					...state.repositoriesData,
					loading: true,
					error: null,
					paginate: { ...state.repositoriesData.paginate, page: 1, maxReached: false },
				},
			};
		case FETCH_REPOSITORIES_DATA_SUCCESS:
			return { ...state, repositoriesData: { ...state.repositoriesData, loading: false, data: action.payload } };
		case FETCH_REPOSITORIES_DATA_FAILURE:
			return { ...state, repositoriesData: { ...state.repositoriesData, loading: false, data: {}, error: action.payload } };

		// Fetch More Repositories Data
		case FETCH_MORE_REPOSITORIES_DATA_REQUEST:
			return {
				...state,
				repositoriesData: {
					...state.repositoriesData,
					error: null,
					paginate: { ...state.repositoriesData.paginate, loading: true, page: state.repositoriesData.paginate.page + 1 },
				},
			};
		case FETCH_MORE_REPOSITORIES_DATA_SUCCESS:
			return {
				...state,
				repositoriesData: {
					...state.repositoriesData,
					data: { ...state.repositoriesData.data, items: [...state.repositoriesData.data.items, ...action.payload.items] },
					paginate: { ...state.repositoriesData.paginate, loading: false, maxReached: action.payload.items.length === 0 ? true : false },
				},
			};
		case FETCH_MORE_REPOSITORIES_DATA_FAILURE:
			return {
				...state,
				repositoriesData: {
					...state.repositoriesData,
					loading: false,
					data: {},
					error: action.payload,
					paginate: { ...state.repositoriesData.paginate, loading: false },
				},
			};

		default:
			return state;
	}
};

export default reducer;

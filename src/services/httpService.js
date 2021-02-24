import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(async (request) => {
	request.headers["accept"] = "application/vnd.github.v3+json";
	return request;
});

axios.interceptors.response.use(null, (error) => {
	const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
	if (!expectedError) {
		console.error("An unexpected error has occured: ", error.response);
	}

	return Promise.reject(error);
});

const http = {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};

export default http;

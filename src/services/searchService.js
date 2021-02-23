import http from "./httpService";
const apiEndpoint = "https://api.github.com/search";

export async function getUsers(query) {
	if (!query) return alert("Please add search query to the user endpoint!");
	return await http.get(apiEndpoint + "/users" + query);
}

export async function getRepositories(query = "?q=") {
	if (!query) return alert("Please add search query to the repositories endpoint!");
	return await http.get(apiEndpoint + "/repositories" + query);
}

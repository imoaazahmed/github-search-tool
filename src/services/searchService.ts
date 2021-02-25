import http from "./httpService";
const apiEndpoint = "/search";

export async function getUsers(query: string) {
	if (!query) return alert("Please add search query to the user endpoint!");
	return await http.get(apiEndpoint + "/users" + query);
}

export async function getRepositories(query: string) {
	if (!query) return alert("Please add search query to the repositories endpoint!");
	return await http.get(apiEndpoint + "/repositories" + query);
}

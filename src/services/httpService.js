async function get(url) {
	try {
		const response = await fetch(url, {
			mathod: "GET",
			mode: "cors",
			cache: "default",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer-when-downgrade",
		});

		return response.json();
	} catch (error) {
		return error;
	}
}

async function post(url, data) {
	try {
		const response = await fetch(url, {
			mathod: "POST",
			mode: "cors",
			cache: "default",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer-when-downgrade",
			body: JSON.stringify(data),
		});

		return response.json();
	} catch (error) {
		return error;
	}
}

const http = {
	get,
	post,
};

export default http;

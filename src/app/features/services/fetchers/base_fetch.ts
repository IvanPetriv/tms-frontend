import { jwtTokenObject } from "../../../shared/constants/global_variables.ts";

/*
	Performs an API request to the given URL with the given options.
	Params: url - The address to where the request is sent
			options - Request options, e.g. header, body etc.
*/
export async function api_request(url: string, options: RequestInit = {}): Promise<any> {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
		}
		return await response.json();
	} catch (error) {
		console.error(`API request failed: ${url}`, error);
		throw error;
	}
}


/*
	Performs a GET request to the given URL.
	Params: url - The address where the request is sent
*/
export async function get_api_request(url: string): Promise<any> {
	return await api_request(url, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${jwtTokenObject.jwtToken}`,
		}
	});
}


/*
	Performs a POST request to the given URL.
	Params: url - The address where the request is sent
			body - Body of the request which can contain user data
*/
export async function post_api_request(url: string, body: object): Promise<any> {
	return await api_request(url, {
		method: 'POST',
		headers: {
			"Authorization": `Bearer ${jwtTokenObject.jwtToken}`,
		},
		body: JSON.stringify(body)
	});
}


/*
	Performs a PUT request to the given URL.
	Params: url - The address where the request is sent
			body - Body of the request which can contain user data
*/
export async function put_api_request(url: string, body: object): Promise<any> {
	return await api_request(url, {
		method: 'PUT',
		headers: {
			"Authorization": `Bearer ${jwtTokenObject.jwtToken}`,
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(body)
	});
}


/*
	Performs a DELETE request to the given URL.
	Params: url - The address where the request is sent
*/
export async function delete_api_request(url: string): Promise<any> {
	return await api_request(url, {
		method: 'DELETE',
		headers: {
			"Authorization": `Bearer ${jwtTokenObject.jwtToken}`,
			'Content-Type': 'application/json;charset=utf-8'
		}
	});
}

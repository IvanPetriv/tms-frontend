import { JWT_TOKEN_OBJECT } from "../constants/global_variables.ts";

/*
	Performs an API request to the given URL with the given options.
	Params: url - The address to where the request is sent
			options - Request options, e.g. header, body etc.
*/
export async function apiRequest(url: string, options: RequestInit = {}): Promise<any> {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
		}
		return await response.json();
	} catch (error) {
		console.error(`API request failed: ${url}`, error);
		console.log(`JWT: ${JWT_TOKEN_OBJECT.jwtToken}`)
		console.log(`Decoded: ${JWT_TOKEN_OBJECT.decodeToken()}`)
		throw error;
	}
}


/*
	Performs a GET request to the given URL.
	Params: url - The address where the request is sent
*/
export async function getApiRequest(url: string, anonymous: boolean = false): Promise<any> {
	const headers: Record<string, string> = {
		"Content-Type": "application/json"
	};
	if (!anonymous) {
		headers["Authorization"] = `Bearer ${JWT_TOKEN_OBJECT.jwtToken}`;
	}

	return apiRequest(url, {
		method: "GET",
		credentials: "include",
		headers: headers
	});
}


/*
	Performs a POST request to the given URL.
	Params: url - The address where the request is sent
			body - Body of the request which can contain user data
*/
export async function postApiRequest(url: string, body: object, anonymous: boolean = false): Promise<any> {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};
	if (!anonymous) {
		headers["Authorization"] = `Bearer ${JWT_TOKEN_OBJECT.jwtToken}`;
	}

	return apiRequest(url, {
		method: "POST",
		credentials: "include",
		headers: headers,
		body: JSON.stringify(body)
	});
}


/*
	Performs a PUT request to the given URL.
	Params: url - The address where the request is sent
			body - Body of the request which can contain user data
*/
export async function putApiRequest(url: string, body: object, anonymous: boolean = false): Promise<any> {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};
	if (!anonymous) {
		headers["Authorization"] = `Bearer ${JWT_TOKEN_OBJECT.jwtToken}`;
	}

	return apiRequest(url, {
		method: "PUT",
		credentials: "include",
		headers: headers,
		body: JSON.stringify(body)
	});
}


/*
	Performs a DELETE request to the given URL.
	Params: url - The address where the request is sent
*/
export async function deleteApiRequest(url: string, anonymous: boolean = false): Promise<any> {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};
	if (!anonymous) {
		headers["Authorization"] = `Bearer ${JWT_TOKEN_OBJECT.jwtToken}`;
	}

	return apiRequest(url, {
		method: "DELETE",
		credentials: "include",
		headers: headers
	});
}

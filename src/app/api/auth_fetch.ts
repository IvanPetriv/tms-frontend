import * as connection from "../constants/connection_strings.ts";
import { postApiRequest } from "./base_fetch.ts";
import UserLogin from "../interfaces/user_login.ts";
import UserRegister from "../interfaces/user_register.ts";


export async function registerUser(userData: UserRegister): Promise<any> {
	let requestUrl = connection.backendApi("register", `manual`);
	return await postApiRequest(requestUrl, userData, true);
}

export async function loginUser(userData: UserLogin): Promise<any> {
	let requestUrl = connection.backendApi("login", `token`);
	return await postApiRequest(requestUrl, userData, true);
}

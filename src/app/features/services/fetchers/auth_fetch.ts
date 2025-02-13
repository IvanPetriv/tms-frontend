import * as connection from "../../../shared/constants/connection_strings.ts";
import { get_api_request, post_api_request } from "./base_fetch.ts";
import UserLogin from "../../../shared/interfaces/user_login.ts";


export async function registerUser() {

}

export async function loginUser(userData: UserLogin): Promise<any> {
	let requestUrl = connection.backendApi("login", `token`);
	return await post_api_request(requestUrl, userData);
}

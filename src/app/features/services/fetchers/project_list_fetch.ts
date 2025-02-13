import * as connectionAddress from "../../../shared/constants/connection_strings.ts";
import { delete_api_request as deleteApiRequest, get_api_request as getApiRequest, post_api_request as postApiRequest, put_api_request as putApiRequest } from "./base_fetch.ts";
import Project from "../../../shared/interfaces/DB/project.js";


let tableName: string = "project";

/*
	Fetches all projects that the user is a part of.
	Params: user_id: ID of the user
*/
export async function getAllForUser(userId: number): Promise<Project[]> {
	let requestUrl = connectionAddress.backendApi(tableName, `user/${userId}`);
	return await getApiRequest(requestUrl);
}


/*
	Fetches all projects that the user is a part of.
	Params: user_id: ID of the user
*/
export async function getById(projectId: number): Promise<Project> {
	let requestUrl = connectionAddress.backendApi(tableName, `${projectId}`);
	return await getApiRequest(requestUrl);
}


/*
	Creates a new project with the given data
	Params: project_data - object that contains project data
*/
export async function create(projectData: object): Promise<Project> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await postApiRequest(requestUrl, projectData);
}


/*
	Updates a project with the given data
	Params: project_data - object that contains project data
*/
export async function update(projectData: object): Promise<Project> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await putApiRequest(requestUrl, projectData);
}


/*
	Deletes a project by its ID
	Params: project_id: ID of the project
*/
export async function deleteById(projectId: number): Promise<Project> {
	let requestUrl = connectionAddress.backendApi(tableName, `${projectId}`);
	return await deleteApiRequest(requestUrl);
}

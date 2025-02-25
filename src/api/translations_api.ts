import * as connectionAddress from "../constants/connection_strings.ts";
import { deleteApiRequest, getApiRequest, postApiRequest, putApiRequest } from "./base_api.ts";
import Translation from "../interfaces/DB/translation.ts";


let tableName: string = "Translations";


/*
	Fetches the translation by its ID.
	Params: user_id: ID of the user
*/
export async function getById(translationId: number): Promise<Translation> {
	let requestUrl = connectionAddress.backendApi(tableName, `${translationId}`);
	return await getApiRequest(requestUrl);
}


/*
	Fetches all translations that belong to the source string with the specified ID.
	Params: user_id: ID of the user
*/
export async function getBySourceStringId(translationId: number): Promise<Translation[]> {
	let requestUrl = connectionAddress.backendApi(tableName, `source/${translationId}`);
	return await getApiRequest(requestUrl);
}


/*
	Creates a new project with the given data
	Params: project_data - object that contains project data
*/
export async function create(translationData: object): Promise<Translation> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await postApiRequest(requestUrl, translationData);
}


/*
	Updates a project with the given data
	Params: project_data - object that contains project data
*/
export async function update(translationData: object): Promise<Translation> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await putApiRequest(requestUrl, translationData);
}


/*
	Deletes a project by its ID
	Params: project_id: ID of the project
*/
export async function deleteById(translationId: number): Promise<Translation> {
	let requestUrl = connectionAddress.backendApi(tableName, `${translationId}`);
	return await deleteApiRequest(requestUrl);
}

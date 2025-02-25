import * as connectionAddress from "../constants/connection_strings.ts";
import { deleteApiRequest, getApiRequest, postApiRequest, putApiRequest } from "./base_api.ts";
import TranslationVote from "../interfaces/DB/translation_vote.ts";


let tableName: string = "TranslationVotes";


/*
	Fetches the translation vote by its ID.
	Params: translationVoteId: ID of the translation vote
*/
export async function getById(translationVoteId: number): Promise<TranslationVote> {
	let requestUrl = connectionAddress.backendApi(tableName, `${translationVoteId}`);
	return await getApiRequest(requestUrl);
}


/*
	Fetches all translation votes that are cast to the given translation.
	Params: translationId: ID of the translation
*/
export async function getByTranslationId(translationId: number): Promise<TranslationVote[]> {
	let requestUrl = connectionAddress.backendApi(tableName, `translation/${translationId}`);
	return await getApiRequest(requestUrl);
}


/*
	Creates a new translation vote with the given data
	Params: translationVoteData - object that contains translation vote data
*/
export async function create(translationVoteData: object): Promise<TranslationVote> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await postApiRequest(requestUrl, translationVoteData);
}


/*
	Updates a translation vote with the given data
	Params: translationVoteData - object that contains translation vote data
*/
export async function update(translationVoteData: object): Promise<TranslationVote> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await putApiRequest(requestUrl, translationVoteData);
}


/*
	Deletes a translation vote by its ID
	Params: translationVoteId: ID of the translation vote
*/
export async function deleteById(translationVoteId: number): Promise<TranslationVote> {
	let requestUrl = connectionAddress.backendApi(tableName, `${translationVoteId}`);
	return await deleteApiRequest(requestUrl);
}

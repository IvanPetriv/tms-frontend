import * as connectionAddress from "../constants/connection_strings.ts";
import { deleteApiRequest, getApiRequest, postApiRequest, putApiRequest } from "./base_api.ts";
import Chat from "../interfaces/DB/chat.ts";


let tableName: string = "Chats";


/*
	Fetches the chat by its ID.
	Params: user_id: ID of the user
*/
export async function getById(chatId: number): Promise<Chat> {
	let requestUrl = connectionAddress.backendApi(tableName, `${chatId}`);
	return await getApiRequest(requestUrl);
}


/*
	Fetches all chats that belong to the user with the specified ID.
	Params: user_id: ID of the user
*/
export async function getAllByUserId(userId: number): Promise<Chat[]> {
	let requestUrl = connectionAddress.backendApi(tableName, `user/${userId}`);
	return await getApiRequest(requestUrl);
}


/*
	Creates a new chat with the given data
	Params: chatData - object that contains chat data
*/
export async function create(chatData: object): Promise<Chat> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await postApiRequest(requestUrl, chatData);
}


/*
	Updates a chat with the given data
	Params: chatData - object that contains project data
*/
export async function update(chatData: object): Promise<Chat> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await putApiRequest(requestUrl, chatData);
}


/*
	Deletes a chat by its ID
	Params: chatId: ID of the chat
*/
export async function deleteById(chatId: number): Promise<Chat> {
	let requestUrl = connectionAddress.backendApi(tableName, `${chatId}`);
	return await deleteApiRequest(requestUrl);
}

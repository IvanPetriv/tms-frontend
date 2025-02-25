import * as connectionAddress from "../constants/connection_strings.ts";
import { deleteApiRequest, getApiRequest, postApiRequest, putApiRequest } from "./base_api.ts";
import ChatMessage from "../interfaces/DB/chat_message.ts";


let tableName: string = "ChatMessages";


/*
	Fetches the chat message by its ID.
	Params: user_id: ID of the user
*/
export async function getById(chatId: number): Promise<ChatMessage> {
	let requestUrl = connectionAddress.backendApi(tableName, `${chatId}`);
	return await getApiRequest(requestUrl);
}


/*
	Fetches all chats that belong to the user with the specified ID.
	Params: user_id: ID of the user
*/
export async function getAllByUserId(userId: number): Promise<ChatMessage[]> {
	let requestUrl = connectionAddress.backendApi(tableName, `user/${userId}`);
	return await getApiRequest(requestUrl);
}


/*
	Creates a new chat with the given data
	Params: chatData - object that contains chat data
*/
export async function create(chatData: object): Promise<ChatMessage> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await postApiRequest(requestUrl, chatData);
}


/*
	Updates a chat with the given data
	Params: chatData - object that contains project data
*/
export async function update(chatData: object): Promise<ChatMessage> {
	let requestUrl = connectionAddress.backendApi(tableName, ``);
	return await putApiRequest(requestUrl, chatData);
}


/*
	Deletes a chat by its ID
	Params: chatId: ID of the chat
*/
export async function deleteById(chatId: number): Promise<ChatMessage> {
	let requestUrl = connectionAddress.backendApi(tableName, `${chatId}`);
	return await deleteApiRequest(requestUrl);
}

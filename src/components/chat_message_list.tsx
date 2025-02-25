import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import * as chatApi from "../api/chats_api.ts";

import ChatMessage from "../interfaces/DB/chat_message.ts";

export default function ChatMessageList() {
	const [chatList, setChatList] = useState<ChatMessage[] | null>(null);

	useEffect(() => {
		// Gets all projects that the user is in
		chatApi.getAllByUserId(1)
			.then(data => {
				setChatList(data);
			}).catch(error => {
				console.error("Failed to fetch chats:", error);
				setChatList(null);
			});
	}, []);
	
	return (
		<div>
			{chatList === null ? (
				<p>Error loading chats.</p>
			) : (
				<Table striped hover>
					<thead>

					</thead>
					<tbody>
						{chatList.map((chat: ChatMessage, index: number) => (
							<tr key={index}>
								<td>
									<div>
										<p>{chat.name}</p>
										<p>{chat.description}</p>
									</div>
								</td>
								<td><button>Options</button></td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	)
}

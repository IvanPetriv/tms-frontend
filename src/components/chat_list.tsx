import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import * as chatApi from "../api/chats_api.ts";

import Chat from "../interfaces/DB/chat";

export default function ChatList() {
	const [chatList, setChatList] = useState<Chat[] | null>(null);

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
						{chatList.map((chat: Chat, index: number) => (
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

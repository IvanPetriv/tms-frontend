import React from "react";


import { Col, Row } from "react-bootstrap";
import ChatList from "../../components/chat_list.tsx";



export default function ChatPage() {
	return (
		<Row>
			<Col className="chat-list">
				<ChatList/>
			</Col>
			<Col className="selected-chat-messages">
				Hi
			</Col>
		</Row>
	)
}

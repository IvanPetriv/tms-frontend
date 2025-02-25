export default interface ChatMessage {
	id: number;
	chat_id: number | null;
	message: string | null;
	created_by: number | null;
	created_at: Date | null;
	edited_at: Date | null;
}

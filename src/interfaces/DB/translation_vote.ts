export default interface TranslationVote {
	id: number;
	user_id: number | null;
	translation_id: number | null;
	vote: boolean | null;
	voted_at: Date | null;
}

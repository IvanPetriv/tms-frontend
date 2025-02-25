export default interface Translation {
	id: number;
	language_id: number | null;
	source_string_id: number | null;
	translation1: string | null;
	translatedBy: number | null;
	translatedAt: Date | null;
	updatedBy: number | null;
	updatedAt: Date | null;
	isApproved: boolean | null;
	approvedBy: number | null;
	approvedAt: Date | null;
}

export default interface User {
	id: number;
	username: string;
	firstName: string | null;
	middleName: string | null;
	lastName: string | null;
	email: string | null;
	joinDate: Date | null;
	profilePicture: Blob | null;
}

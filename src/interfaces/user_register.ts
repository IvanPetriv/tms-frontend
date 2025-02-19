export default interface UserRegister {
	username: string;
	firstName: string | null;
	middleName: string | null;
	lastName: string | null;
	email: string | null;
	profilePicture: Blob | null;
}

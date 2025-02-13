export const backendApi = (table_name: string, request: string = "") =>
	`https://localhost:7219/api/${table_name}/${request}`

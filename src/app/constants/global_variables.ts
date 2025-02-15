/*
    JWT object which is stored in local storage
*/
export const JWT_TOKEN_OBJECT = {
    get jwtToken(): string | null {
        return localStorage.getItem('jwtToken');
    },
    set jwtToken(token: string) {
        localStorage.setItem('jwtToken', token);
    },
    // Retrieves data from the token
    decodeToken(): Record<string, any> | null {
        const token = this.jwtToken;
        if (!token) return null;

        try {
            const payload = token.split('.')[1];
            const payloadJson = atob(payload);
            return JSON.parse(payloadJson);
        } catch (error) {
            console.error("Invalid JWT token:", error);
            return null;
        }
    }
};

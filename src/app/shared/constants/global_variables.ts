export const jwtTokenObject = {
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
            const [header, payload, signature] = token.split('.');
            const payloadJson = atob(payload);
            return JSON.parse(payloadJson);
        } catch (error) {
            console.error("Invalid JWT token:", error);
            return null;
        }
    }
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = {
    get: async (url: string) => {
        try {
            const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
            const response = await fetch(`${BASE_URL}${url}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
                },
            });
            const data = await response.json();
            if (!response.ok) {
                return { data: { status: false, message: data.message || 'Request failed', errors: data.errors } };
            }
            return { data };
        } catch (error) {
            console.error('API GET error:', error);
            return { data: { status: false, message: 'Network error' } };
        }
    },
    post: async (url: string, body: any = {}) => {
        try {
            const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
            const response = await fetch(`${BASE_URL}${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            if (!response.ok) {
                return { data: { status: false, message: data.message || 'Request failed', errors: data.errors } };
            }
            return { data };
        } catch (error) {
            console.error('API POST error:', error);
            return { data: { status: false, message: 'Network error' } };
        }
    },
};

export default api;

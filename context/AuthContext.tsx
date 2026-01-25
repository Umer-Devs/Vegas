"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { toast } from 'react-hot-toast';

interface User {
    id?: number;
    name: string;
    email: string;
    phone: string;
}

interface AuthContextType {
    user: User | null;
    isAdmin: boolean;
    isLoggedIn: boolean;
    login: (email: string, pass: string) => Promise<boolean>;
    loginWithToken: (token: string) => Promise<boolean>;
    register: (username: string, email: string, phone: string, pass: string, confirmPass: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAIL = "umerjamil1211@gmail.com";
const ADMIN_PASS = "umerumer";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storedAdmin = localStorage.getItem('is_admin') === 'true';
        const storedUser = localStorage.getItem('user_data');

        setIsAdmin(storedAdmin);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const loginWithToken = async (token: string) => {
        try {
            localStorage.setItem('auth_token', token);
            const response = await api.get('/user');
            if (response.data.status) {
                const userData = response.data.user;
                setUser(userData);
                setIsAdmin(userData.email === ADMIN_EMAIL);

                localStorage.setItem('user_data', JSON.stringify(userData));

                if (userData.email === ADMIN_EMAIL) {
                    localStorage.setItem('is_admin', 'true');
                    document.cookie = `is_admin=true; path=/; max-age=86400; SameSite=Lax`;
                }
                return true;
            }
        } catch (error) {
            console.error("Login with token failed:", error);
            localStorage.removeItem('auth_token');
        }
        return false;
    };

    const login = async (email: string, pass: string) => {
        try {
            const response = await api.post('/login', { email, password: pass });
            if (response.data.status) {
                const userData = response.data.user;
                const token = response.data.token;

                setUser(userData);
                setIsAdmin(userData.email === ADMIN_EMAIL);

                localStorage.setItem('user_data', JSON.stringify(userData));
                localStorage.setItem('auth_token', token);

                if (userData.email === ADMIN_EMAIL) {
                    localStorage.setItem('is_admin', 'true');
                    document.cookie = `is_admin=true; path=/; max-age=86400; SameSite=Lax`;
                    toast.success("Welcome, Admin!");
                    router.push('/dashboard');
                } else {
                    toast.success(`Welcome back, ${userData.name || 'User'}!`);
                    router.push('/');
                }
                return true;
            } else {
                const errorMsg = response.data.errors
                    ? Object.values(response.data.errors).flat().join('\n')
                    : response.data.message || "Login failed";
                toast.error(errorMsg);
            }
        } catch (error: any) {
            console.error("Login failed:", error);
            const errorMsg = error.response?.data?.message || "Network error. Please try again.";
            toast.error(errorMsg);
        }
        return false;
    };

    const register = async (username: string, email: string, phone: string, pass: string, confirmPass: string) => {
        try {
            const response = await api.post('/register', {
                username,
                email,
                phone,
                password: pass,
                confirmPassword: confirmPass
            });

            if (response.data.status) {
                const userData = response.data.user;
                const token = response.data.token;

                setUser(userData);
                localStorage.setItem('user_data', JSON.stringify(userData));
                localStorage.setItem('auth_token', token);

                toast.success("Registration successful!");
                router.push('/');
            } else {
                const errorMsg = response.data.errors
                    ? Object.values(response.data.errors).flat().join('\n')
                    : response.data.message || "Registration failed";
                toast.error(errorMsg);
            }
        } catch (error) {
            console.error("Registration failed:", error);
            toast.error("Network error. Please check your connection.");
        }
    };

    const logout = async () => {
        try {
            await api.post('/logout', {});
        } catch (error) {
            console.error("Logout API call failed:", error);
        } finally {
            setIsAdmin(false);
            setUser(null);
            localStorage.removeItem('is_admin');
            localStorage.removeItem('user_data');
            localStorage.removeItem('auth_token');
            document.cookie = "is_admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax";
            router.push('/login');
        }
    };

    const isLoggedIn = !!user || isAdmin;

    return (
        <AuthContext.Provider value={{ user, isAdmin, isLoggedIn, login, loginWithToken, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

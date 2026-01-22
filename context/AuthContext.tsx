"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    name: string;
    email: string;
    phone: string;
}

interface AuthContextType {
    user: User | null;
    isAdmin: boolean;
    isLoggedIn: boolean;
    login: (email: string, pass: string) => boolean;
    register: (name: string, email: string, phone: string, pass: string) => void;
    logout: () => void;
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

    const login = (email: string, pass: string) => {
        if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
            setIsAdmin(true);
            localStorage.setItem('is_admin', 'true');
            document.cookie = `is_admin=true; path=/; max-age=86400; SameSite=Lax`;

            const currentCount = parseInt(localStorage.getItem("admin_login_count") || "0");
            localStorage.setItem("admin_login_count", (currentCount + 1).toString());

            router.push('/dashboard');
            return true;
        }

        const storedUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
        const foundUser = storedUsers.find((u: any) => u.email === email && u.password === pass);

        if (foundUser) {
            const userData = { name: foundUser.name, email: foundUser.email, phone: foundUser.phone };
            setUser(userData);
            localStorage.setItem('user_data', JSON.stringify(userData));
            router.push('/');
            return true;
        }

        return false;
    };

    const register = (name: string, email: string, phone: string, pass: string) => {
        const storedUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
        const newUser = { name, email, phone, password: pass };

        storedUsers.push(newUser);
        localStorage.setItem('registered_users', JSON.stringify(storedUsers));

        const userData = { name, email, phone };
        setUser(userData);
        localStorage.setItem('user_data', JSON.stringify(userData));
        router.push('/');
    };

    const logout = () => {
        setIsAdmin(false);
        setUser(null);
        localStorage.removeItem('is_admin');
        localStorage.removeItem('user_data');
        document.cookie = "is_admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax";
        router.push('/login');
    };

    const isLoggedIn = !!user || isAdmin;

    return (
        <AuthContext.Provider value={{ user, isAdmin, isLoggedIn, login, register, logout, loading }}>
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

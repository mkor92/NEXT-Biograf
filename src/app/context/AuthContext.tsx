'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface User {
	name: string;
	email: string;
}

interface AuthContextValue {
	user: User | null;
	isLoggedIn: boolean;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	register: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
	user: null,
	isLoggedIn: false,
	login: async () => {},
	logout: async () => {},
	register: async () => {},
});

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context)
		throw new Error('useAuth must be used within the AuthContext provider');
	return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [user, setUser] = useState<User | null>(null);
	const isLoggedIn = !!user;

	const login = async (email: string, password: string) => {
		try {
			const res = await fetch('http://localhost:3000/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			const path = searchParams.get('p');
			const data = await res.json();

			if (res.ok) {
				setUser(data.data);
				return router.push(path || '/');
			}

			console.log(`HTTP-Error: ${res.status}`, data);
			return alert(data.msg);
		} catch (error) {
			console.log(error);
			return alert('An error ocurred, try again!');
		}
	};

	const logout = async () => {
		const res = await fetch('http://localhost:3000/api/logout');
		if (!res.ok) return alert('An error ocurred try again!');
		setUser(null);
		return router.push('/');
	};

	const register = async (name: string, email: string, password: string) => {
		// ...
	};

	useEffect(() => {
		const getUser = async () => {
			const res = await fetch('http://localhost:3000/api/user');
			if (!res.ok) return setUser(null);
			const user = await res.json();
			return setUser(user);
		};
		getUser();
	}, []);

	return (
		<AuthContext.Provider value={{ user, isLoggedIn, login, logout, register }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

interface User {
	name: string;
	email: string;
}

interface AuthContextValue {
	user: User | null;
	isLoading: boolean;
	errorMessage: string | null;
	createError: (error: string) => void;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	register: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
	user: null,
	isLoading: false,
	errorMessage: null,
	createError: () => {},
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

export const revalidate = 1;

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	// Context Values
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errorMessage, setError] = useState<string | null>(null);

	const createError = (error: string) => {
		setError(error);
	};

	const login = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			const res = await fetch(`/api/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			let path = searchParams.get('p');
			if (path) {
				path = decodeURIComponent(path);
			}

			const payload = await res.json();
			setIsLoading(false);

			if (res.ok) {
				setUser(payload.data);
				return router.push(path || '/');
			}

			return setError(payload.msg);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
			return setError('An error ocurred, try again!');
		}
	};

	const logout = async () => {
		setIsLoading(true);
		const res = await fetch(`/api/logout`);
		setIsLoading(false);
		if (!res.ok) {
			return setError('An error ocurred try again!');
		}
		setUser(null);
		return router.push('/');
	};

	const register = async (name: string, email: string, password: string) => {
		// Martas code goes here...
	};

	// First time you visit the website, we will check if you are authenticated.
	// Exceptions: /login & /register since the middleware already checks if you can enter those pages.
	useEffect(() => {
		if (pathname === '/login' || pathname === '/register') return;

		const getUser = async () => {
			const res = await fetch(`/api/user`);
			if (!res.ok) return setUser(null);
			const user = await res.json();
			return setUser(user);
		};
		getUser();
	}, []);

	// Removes the error after 6 seconds
	useEffect(() => {
		if (errorMessage === null) return;

		let timer = setTimeout(() => setError(null), 6 * 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [errorMessage]);

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				errorMessage,
				createError,
				login,
				logout,
				register,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

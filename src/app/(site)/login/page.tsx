'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

const LoginForm: FC = () => {
	const { login } = useAuth();

	const [userData, setUserData] = useState<{
		email: string;
		password: string;
	}>({
		email: '',
		password: '',
	});

	// Form Submit
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!userData.email || !userData.password) return;
		await login(userData.email, userData.password);
	};

	// Input change listener
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUserData({
			...userData,
			[e.target.id]: e.currentTarget.value,
		});
	};

	return (
		<section className="sec-cont login-container">
			<div>
				<h1>Inloggning</h1>
				<form action="" onSubmit={handleSubmit}>
					<label htmlFor="email">Email</label>
					<input
						onChange={handleChange}
						className="form-input-field"
						type="text"
						id="email"
					/>
					<label htmlFor="password">Password</label>
					<input
						onChange={handleChange}
						className="form-input-field"
						type="password"
						id="password"
						name="password"
					/>
					<button className="primary-btn">Logga in</button>
				</form>
				<p>
					Har du inget konto?
					<span>
						<Link href="/signup" className="singup-link">
							Registrera dig!
						</Link>
					</span>
				</p>
			</div>
		</section>
	);
};

export default LoginForm;

'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPersonCircleExclamation,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const LoginForm: FC = () => {
	const { login, isLoading, errorMessage, createError } = useAuth();

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
		if (!userData.email || !userData.password)
			return createError('Vänligen fyll i alla fält');
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
					{errorMessage && (
						<>
							<div className="error-color" style={{ paddingBottom: '1rem' }}>
								<FontAwesomeIcon icon={faPersonCircleExclamation} />{' '}
								{errorMessage}
							</div>
						</>
					)}
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
					<button className={isLoading ? 'primary-btn loading' : 'primary-btn'}>
						{isLoading ? (
							<FontAwesomeIcon icon={faSpinner} spin color="#FFFFF" />
						) : (
							'Logga in'
						)}
					</button>
				</form>

				<p>
					<small>
						Har du inget konto?{' '}
						<Link href="/signup" className="singup-link">
							Registrera dig!
						</Link>
					</small>
				</p>
			</div>
		</section>
	);
};

export default LoginForm;

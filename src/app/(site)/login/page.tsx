'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const LoginForm: FC = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [userData, setUserData] = useState<{
		email?: string;
		password?: string;
	}>();

	// Form Submit
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!userData?.email || !userData?.password) return;

		try {
			const res = await fetch('http://localhost:3000/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			});

			const path = searchParams.get('p');

			if (res.ok) return router.push(path || '/');

			const data = await res.json();
			console.log(`HTTP-Error: ${res.status}`, data);
			return alert(data.msg);
		} catch (error) {
			console.log(error);
			return alert('An error ocurred, try again!');
		}
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

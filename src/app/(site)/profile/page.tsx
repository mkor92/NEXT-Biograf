'use client';
import { useRouter } from 'next/navigation';

function page() {
	const router = useRouter();

	const logout = async () => {
		const res = await fetch('http://localhost:3000/api/logout');
		if (!res.ok) return alert('An error ocurred try again!');
		return router.push('/');
	};

	return (
		<div>
			<h1>Profile</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
}

export default page;

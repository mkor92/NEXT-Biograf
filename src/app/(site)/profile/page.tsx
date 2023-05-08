'use client';
import { useAuth } from '@/app/context/AuthContext';

function Profile() {
	const { user, logout } = useAuth();

	const handleLogout = async () => {
		await logout();
	};

	return (
		<div>
			<h1>Profile</h1>
			{user && (
				<>
					<p>{user.name}</p>
					<p>{user.email}</p>
				</>
			)}
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

export default Profile;

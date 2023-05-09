'use client';
import { useAuth } from '@/app/context/AuthContext';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Profile() {
	const { user, logout, isLoading } = useAuth();

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
			<button
				style={{ marginTop: '1rem' }}
				className={isLoading ? 'primary-btn loading' : 'primary-btn'}
				onClick={handleLogout}
			>
				{isLoading ? (
					<FontAwesomeIcon icon={faSpinner} spin color="#FFFFF" />
				) : (
					'Logga ut'
				)}
			</button>
		</div>
	);
}

export default Profile;

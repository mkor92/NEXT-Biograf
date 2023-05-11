'use client';

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

export default function Header() {
	const { user } = useAuth();

	const menu = [
		{
			label: 'Hem',
			link: '/',
		},
		{
			label: 'Om oss',
			link: '/about',
		},
		{
			label: 'Biljettinfo',
			link: '/UC',
		},
		{
			label: 'Presentkort',
			link: '/UC',
		},
	];
	return (
		<header>
			<Link href="/" className="logo">
				<img src="logo.png" alt="logo" />
			</Link>
			<div className="sec">
				<div className="header-content-wrap sec-cont">
					<nav className="header-nav">
						<button className="header-nav-toggle"></button>
						<menu className="header-menu">
							{menu.map((li, index) => (
								<li className="header-menu-item" key={index}>
									<Link href={li.link}>{li.label}</Link>
								</li>
							))}
							{user && (
								<>
									<li className="header-menu-item">
										<Link href={'/profile'}>Profile</Link>
									</li>
								</>
							)}
							{!user && (
								<>
									<li className="header-menu-item">
										<Link href={'/login'}>Logga in</Link>
									</li>
								</>
							)}
						</menu>
					</nav>
				</div>
			</div>
		</header>
	);
}

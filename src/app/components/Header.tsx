'use client';

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
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

	const { user } = useAuth();
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [height, setHeight] = useState(0);
	const header = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setHeight(header?.current?.clientHeight!);
	}, [openMenu]);

	return (
		<header className="sec" ref={header}>
			<div className="sec-cont header-content">
				{/* Logo */}
				<Link
					href="/"
					className="logo"
					onClick={() => {
						if (openMenu) {
							setOpenMenu(!openMenu);
						}
					}}
				>
					<img src="/logo.svg" alt="logo" />
					<p>Luleå Bio</p>
				</Link>

				{/* Menu */}
				<menu
					className={openMenu ? 'header-menu header-menu-open' : 'header-menu'}
					style={openMenu && height ? { top: `${height}px` } : {}}
				>
					{menu.map((li, index) => (
						<li className="header-menu-item" key={index}>
							<Link
								href={li.link}
								onClick={() => {
									setOpenMenu(!openMenu);
								}}
							>
								{li.label}
							</Link>
						</li>
					))}
					{user && (
						<>
							<li className="header-menu-item">
								<Link
									href={'/profile'}
									onClick={() => {
										setOpenMenu(!openMenu);
									}}
								>
									Profile
								</Link>
							</li>
						</>
					)}
					{!user && (
						<>
							<li className="header-menu-item">
								<Link
									href={'/login'}
									onClick={() => {
										setOpenMenu(!openMenu);
									}}
								>
									Logga in
								</Link>
							</li>
						</>
					)}
				</menu>

				{/* Mobile menu open/close buttons */}
				{!openMenu && (
					<FontAwesomeIcon
						icon={faBars}
						className="header-bars"
						color="white"
						onClick={() => {
							setOpenMenu(!openMenu);
						}}
					/>
				)}

				{openMenu && (
					<FontAwesomeIcon
						icon={faCircleXmark}
						className="header-bars"
						color="white"
						onClick={() => {
							setOpenMenu(!openMenu);
						}}
					/>
				)}
			</div>
		</header>
	);
}

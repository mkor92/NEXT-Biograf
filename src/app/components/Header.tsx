'use client';

import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
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
		{
			label: 'Logga in',
			link: '/login',
		},
	];
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [height, setHeight] = useState(0);
	const header = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setHeight(header?.current?.clientHeight!);
		console.log(height);
	}, [openMenu]);

	return (
		<header className="sec" ref={header}>
			<div className="sec-cont header-content">
				<Link href="/" className="logo">
					<img src="logo.svg" alt="logo" />
					<p>Luleå Bio</p>
				</Link>
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
				</menu>

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

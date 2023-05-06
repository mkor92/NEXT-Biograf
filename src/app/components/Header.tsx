import Link from 'next/link';

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
						</menu>
					</nav>
				</div>
			</div>
		</header>
	);
}

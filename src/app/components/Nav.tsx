import Link from 'next/link';

function Nav() {
	const menu = [
		{
			label: 'Filmer',
			link: '/movies',
		},
		{
			label: 'Salonger',
			link: '/salons',
		},
		{
			label: 'Restaurang',
			link: '/restaurant',
		},
		{
			label: 'Events',
			link: '/events',
		},
		{
			label: 'Kontakt',
			link: '/contact',
		},
	];

	return (
		<nav className="sec">
			<div className="sec-cont nav-content">
				<menu>
					{menu.map((li, index) => (
						<li className="nav-item" key={index}>
							<Link href={li.link}>{li.label}</Link>
						</li>
					))}
				</menu>
			</div>
		</nav>
	);
}

export default Nav;

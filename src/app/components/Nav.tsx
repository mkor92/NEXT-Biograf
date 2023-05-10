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
			<button className="mobile-nav-menu">
				Meny{' '}
				<span className="arrow-top" id="menu-span">
					&#9662;
				</span>
			</button>
			<div className="nav sec-cont">
				<ul id="nav-id">
					{menu.map((li, index) => (
						<li className="movies-nav" key={index}>
							<ul className="movies-nav-list">
								<li className="movies-nav-element">
									<a href={li.link} className="show-all-movies">
										{li.label}
									</a>
								</li>
							</ul>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Nav;

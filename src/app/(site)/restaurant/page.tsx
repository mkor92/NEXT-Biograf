export default function Restaurant() {
	return (
		<div className="sec-cont restaurant">
			<h2 className="restaurant-text about-salons res-title">
				Luleå bios dine-in bistro
			</h2>

			<div className="separation"></div>

			<div className="restaurant-info">
				<img
					className="restaurant"
					alt="picture of salon with tables"
					src="/images/cinebistro.webp"
				/>
				<div className="restaurant-text-container">
					<p className="restaurant-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						rhoncus aliquam aliquet. Phasellus eu ex quis est ultricies
						convallis. Fusce et orci eu nulla consequat commodo. Pellentesque
						fringilla mollis justo, sit amet eleifend mi porttitor a. Cras ac
						lacus nec enim bibendum fermentum. Nam erat metus, ultricies at ex
						et, tempor sagittis felis. Cras id aliquet nulla. Ut placerat urna
						eget velit pharetra, non mollis libero ultricies. Duis et metus sed
						nisi commodo egestas. Aenean consequat nec quam vel vehicula. In
						quis dui mollis, sollicitudin metus ut, eleifend lacus. Proin a
						sapien sed ipsum auctor porttitor a vel est. Fusce ut orci lacinia,
						sodales nunc ac, scelerisque nisi. Proin ac metus consequat,
						tincidunt dui tempor, hendrerit elit. Nam dignissim est ac metus
						tristique, vitae eleifend orci varius. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>

					<div className="opening-hours">
						<h3>Våra öppettider:</h3>
						<ul>
							<li>Måndag - fredag 12.00 - 21.00</li>
							<li>Lördag 10.00 - 23.30</li>
							<li>Söndag 12.00 - 21.30</li>
						</ul>
					</div>

					<div className="restaurant-btns">
						<button className="primary-btn">Boka bord</button>
						<button className="primary-btn">Se vår meny</button>
					</div>
				</div>
			</div>
		</div>
	);
}

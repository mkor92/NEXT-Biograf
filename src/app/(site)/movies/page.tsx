import Image from 'next/image';
import Link from 'next/link';

export default async function Movies() {
	const res = await fetch('http://localhost:3000/api/movies', {
		next: { revalidate: 1 },
	});

	const payload = await res.json();

	return (
		<div className="sec-cont movies-cont">
			<h1>Alla filmer</h1>
			<div className="separation" />
			<ul className="movie-list">
				{payload.map((movie: any) => {
					return (
						<li key={movie._id} className="movie-item">
							<Link href={`/movies/${movie._id}`}>
								<Image
									src={movie.assets[0]}
									alt="Film omslagsbild"
									width={200}
									height={300}
								/>
								<h4 className="movie-item-text">{movie.name}</h4>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

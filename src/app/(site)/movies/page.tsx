import { db } from '@/utils/db';
import Movie, { IMovie } from '@/models/movie.model';
import Image from 'next/image';
import Link from 'next/link';
db();

async function getMovies(): Promise<IMovie[] | null> {
	try {
		const movies = await Movie.find();
		return movies;
	} catch {
		return null;
	}
}

export default async function Movies() {
	const movies = await getMovies();
	return (
		<div className="sec-cont movies-cont">
			<h1>Alla filmer</h1>
			<div className="separation" />
			<ul className="movie-list">
				{!movies && <p style={{ color: 'white' }}>No movies</p>}
				{movies &&
					movies.map((movie: any) => {
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

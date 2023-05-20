'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface Movie {
	name: string;
	intro: string;
	assets: string[];
	_id: string;
}

interface Screening {
	movie: string;
	salon: string;
	seats: number;
	time: string | Date;
	_id: string;
}

interface Props {
	params: { movieId: string };
}

export default function MovieInfo({ params: { movieId } }: Props) {
	const [movie, setMovie] = useState<Movie | null>(null);
	const [screenings, setScreenings] = useState<Screening[] | null>(null);
	const [error, setError] = useState<boolean>(false);

	async function getData(id: string) {
		const movieRes = await fetch(`/api/movies/${id}`);
		if (!movieRes.ok) return setError(true);
		const { movie }: { movie: Movie } = await movieRes.json();
		setMovie(movie);

		const screeningsRes = await fetch(`/api/movies/${id}/screenings`);
		console.log(screeningsRes);
		if (!screeningsRes.ok) return setScreenings(null);
		const screenings: Screening[] = await screeningsRes.json();
		setScreenings(screenings);
	}

	useEffect(() => {
		getData(movieId.toString());
	}, []);

	return (
		<div className="sec">
			{error && (
				<div className="sec-cont" style={{ color: 'white' }}>
					<p>Denna film finns inte i våra system!</p>
					<Link
						href="/"
						className="primary-btn"
						style={{
							marginTop: '1rem',
							fontSize: '.8em',
							display: 'inline-block',
						}}
					>
						Gå hem
					</Link>
				</div>
			)}

			{!movie && !error && (
				<div className="sec-cont movie-details-loading">
					<FontAwesomeIcon icon={faSpinner} spin={true} />
				</div>
			)}

			{movie && !error && (
				<>
					<article className="movie sec-cont">
						<div>
							<h1 className="title">{movie?.name}</h1>
						</div>
						<div className="movie-text">
							<img
								src={movie?.assets[0]}
								alt="movie image"
								className="movie-img"
							></img>
							<p className="intro">{movie?.intro}</p>
						</div>
					</article>

					{screenings && (
						<section className="screenings sec-cont">
							<h2>Filmvisningar</h2>

							{screenings.map((screening: any, i: number) => {
								return (
									<li key={i}>
										{screening.time.split('T')[0]}{' '}
										{screening.time.split('T')[1].slice(0, 5)}
										<Link
											data-testid="book-screening-btn"
											href={{
												pathname: '/tickets',
												query: {
													screening: screening._id,
													date: screening.time,
													movie: movie?.name,
													img: movie?.assets[0],
												},
											}}
										>
											Boka biljetter
										</Link>
									</li>
								);
							})}
						</section>
					)}
					<section className="review-container sec-cont"></section>
					<section className="review-box sec-cont"></section>
				</>
			)}
		</div>
	);
}

export const revalidate = 1;

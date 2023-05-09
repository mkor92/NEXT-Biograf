'use client';
// @refresh reset
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

async function getMovie(id: string) {
  const res = await fetch(`http://localhost:3000/api/movies/${id}`, {
    next: { revalidate: 1 },
  });
  return res.json();
}
async function getScreenings(id: string) {
  const res = await fetch(`http://localhost:3000/api/movies/${id}/screenings`, {
    next: { revalidate: 1 },
  });
  return res.json();
}

export default async function movieInfo({ params: { movieId } }: any) {
  const movie = await getMovie(movieId);
  const screenings = await getScreenings(movieId);

  screenings.map((screening: any, i: number) => {
    console.log(screening.time);
  });

  if (!movie) return notFound();
  else {
    return (
      <>
        <div className="sec">
          <article className="movie sec-cont">
            <div>
              <h1 className="title">{movie.movie.name}</h1>
            </div>
            <div className="movie-text">
              <img src={movie.movie.assets[0]} alt="movie image" className="movie-img"></img>
              <p className="intro">{movie.movie.intro}</p>
            </div>
            <h2 className="rating sec-cont">Betyg</h2>
          </article>

          <section className="screenings sec-cont">
            <h2>Filmvisningar</h2>

            {screenings.map((screening: any, i: number) => {
              return (
                <li key={i}>
                  {screening.time.split('T')[0]}, {screening.time.split('T')[1].slice(0, 5)}
                  <Link className="" href={`/tickets`}>
                    Boka biljetter
                  </Link>
                </li>
              );
            })}
          </section>
          <section className="review-container sec-cont"></section>
          <section className="review-box sec-cont"></section>
        </div>
      </>
    );
  }
}

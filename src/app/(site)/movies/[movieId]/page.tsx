import React from 'react';
import { notFound } from 'next/navigation';

async function getMovie(id: any) {
  const res = await fetch(`http://localhost:3000/api/movies/${id}`);
  return res.json();
}

export default async function movieInfo({ params: { movieId } }) {
  const movie = await getMovie(movieId);
  if (!movie.data) return notFound();
  else {
    return (
      <>
        <div className="sec">
          <article className="movie sec-cont">
            <div>
              <h1 className="title">{movie.data.attributes.title}</h1>
            </div>
            <div className="movie-text">
              <img
                src={movie.data.attributes.image.url}
                alt="movie image"
                className="movie-img"></img>
              <p className="intro">{movie.data.attributes.intro}</p>
            </div>
            <h2 className="rating sec-cont">Betyg</h2>
          </article>

          <section className="screenings sec-cont">
            <h2>Här kommer filmvisningar</h2>
          </section>
          <section className="review-container sec-cont"></section>
          <section className="review-box sec-cont"></section>
        </div>
      </>
    );
  }
}

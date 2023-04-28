import React from "react";

async function getMovie(id: any) {
  const res = await fetch(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`);
  return res.json();
}

export default async function movieInfo({ params: { movieId } }: any) {
  console.log(`hej ${movieId}`);
  const movieData = getMovie(movieId);
  const [movie] = await Promise.all([movieData]);
  console.log(movie);
  return (
    <>
      <main className="sec">
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
          <h2>Här kommer filvisningar</h2>
        </section>
        <section className="review-container sec-cont"></section>
        <section className="review-box sec-cont"></section>
      </main>
    </>
  );
}

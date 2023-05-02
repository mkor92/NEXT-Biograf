import Image from 'next/image';
import Link from 'next/link';

export default async function Movies() {
  const res = await fetch('http://localhost:3000/api/movies');
  const payload = await res.json();

  return (
    <>
      <h2 className="movies-h2">Alla filmer</h2>
      <div className="movies-header-divider"></div>
      <section className="sec-cont">
        <ul className="movies-list-item-container">
          {payload.map((movie) => {
            return (
              <li key={movie._id} className="movies-list-item">
                <Link href="/movies">
                  <Image
                    src={movie.assets[0]}
                    alt="movie image"
                    width={202.5}
                    height={300}
                  />
                  <h4 className="movie-title-text">{movie.name}</h4>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

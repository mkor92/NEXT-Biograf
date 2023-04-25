import Image from 'next/image';
import Link from 'next/link';

const MOCK = [
  {
    id: 1,
    name: 'Encanto',
    img: '/images/encanto.jpg',
  },
  {
    id: 2,
    name: 'Isle of dogs',
    img: '/images/encanto.jpg',
  },
  {
    id: 3,
    name: 'Min granne Totoro',
    img: '/images/encanto.jpg',
  },
  {
    id: 4,
    name: 'The Shawshank Redemption',
    img: '/images/encanto.jpg',
  },
  {
    id: 5,
    name: 'Forrest Gump',
    img: '/images/encanto.jpg',
  },
];

export default function Movies() {
  return (
    <>
      <h2 className="movies-h2">Alla filmer</h2>
      <div className="movies-header-divider"></div>
      <section className="sec-cont">
        <ul className="movies-list-item-container">
          {MOCK.map((movie) => {
            return (
              <li key={movie.id} className="movies-list-item">
                <Link href="/movies">
                  <Image
                    src={movie.img}
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

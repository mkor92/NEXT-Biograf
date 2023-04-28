import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TicketsPage: FC = () => {
  return (
    <section className="sec-cont tickets-container">
      <h1>Biljettbokning</h1>

      <Image
        src="/images/encanto.jpg"
        alt="movie image"
        width={202.5}
        height={300}
      ></Image>

      <h2>Encanto</h2>
      <p>Stora salongen idag, Onsdag 17.00</p>

      <h2>Välj antal biljetter</h2>
      <h3>Antal biljetter</h3>
      <div>-</div>
      <div>2</div>
      <div>+</div>

      <h2>Välj platser</h2>

      <div className="movie-screen-seat-container">
        <div className="movie-screen-container">
          <div className="movie-screen-left"></div>
          <div className="movie-screen-middle"></div>
          <div className="movie-screen-right"></div>
        </div>

        <div className="seat-container">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>

          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>

          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>

          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>

          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
      </div>

      <div className="choosed-seat">☑️</div>
      <p>Vald plats</p>
      <div className="booked-seat"></div>
      <p>Upptagen</p>
      <div className="divider"></div>
      <h2>
        Att betala: <span>300kr</span>
      </h2>
      <div className="divider"></div>
      <button className="primary-btn">Logga In</button>
      <button className="primary-btn">Fortsätt som gäst</button>
    </section>
  );
};

export default TicketsPage;

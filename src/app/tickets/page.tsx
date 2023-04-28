import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TicketsPage: FC = () => {
  return (
    <section className="sec-cont tickets-container">
      <h1>Biljettbokning</h1>
      <div className="img-text-container">
        <Image
          src="/images/encanto.jpg"
          alt="movie image"
          width={141.75}
          height={210}
        ></Image>
        <div>
          <h2>Encanto</h2>
          <p>Stora salongen idag, Onsdag 17.00</p>
        </div>
      </div>

      <h2>Välj antal biljetter</h2>
      <div className="number-of-tickets-container">
        <h3>Antal biljetter</h3>
        <div className="plus-minus">-</div>
        <div>2</div>
        <div className="plus-minus">+</div>
      </div>

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

      <div className="choose-seat-container">
        <div className="choosed-seat">☑️</div>
        <p>Vald plats</p>
      </div>
      <div className="choose-seat-container">
        <div className="booked-seat"></div>
        <p>Upptagen</p>
      </div>

      <div className="divider"></div>

      <div className="total-sum-container">
        <h2>Att betala:</h2>
        <h2>300kr</h2>
      </div>

      <div className="divider"></div>
      <button className="primary-btn">Logga In</button>
      <button className="primary-btn">Fortsätt som gäst</button>
    </section>
  );
};

export default TicketsPage;

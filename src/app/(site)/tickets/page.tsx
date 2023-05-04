'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MOCKSCREENING = [
  {
    available: false,
    choosed: false,
    place: 1,
  },
  {
    available: true,
    choosed: false,
    place: 2,
  },
  {
    available: true,
    choosed: false,
    place: 3,
  },
  {
    available: true,
    choosed: false,
    place: 4,
  },
  {
    available: true,
    choosed: false,
    place: 5,
  },
  {
    available: true,
    choosed: false,
    place: 6,
  },
  {
    available: false,
    choosed: false,
    place: 7,
  },
  {
    available: false,
    choosed: false,
    place: 8,
  },
  {
    available: true,
    choosed: false,
    place: 9,
  },
  {
    available: true,
    choosed: false,
    place: 10,
  },
  {
    available: true,
    choosed: false,
    place: 11,
  },
  {
    available: true,
    choosed: false,
    place: 12,
  },
  {
    available: true,
    choosed: false,
    place: 13,
  },
  {
    available: true,
    choosed: false,
    place: 14,
  },
  {
    available: true,
    choosed: false,
    place: 15,
  },
  {
    available: true,
    choosed: false,
    place: 16,
  },
  {
    available: true,
    choosed: false,
    place: 17,
  },
  {
    available: true,
    choosed: false,
    place: 18,
  },
  {
    available: true,
    choosed: false,
    place: 19,
  },
  {
    available: true,
    choosed: false,
    place: 20,
  },
  {
    available: false,
    choosed: false,
    place: 21,
  },
  {
    available: true,
    choosed: false,
    place: 22,
  },
  {
    available: true,
    choosed: false,
    place: 23,
  },
  {
    available: true,
    choosed: false,
    place: 24,
  },
  {
    available: true,
    choosed: false,
    place: 25,
  },
  {
    available: true,
    choosed: false,
    place: 26,
  },
  {
    available: true,
    choosed: false,
    place: 27,
  },
  {
    available: true,
    choosed: false,
    place: 28,
  },
  {
    available: true,
    choosed: false,
    place: 29,
  },
  {
    available: true,
    choosed: false,
    place: 30,
  },
  {
    available: true,
    choosed: false,
    place: 31,
  },
  {
    available: true,
    choosed: false,
    place: 32,
  },
  {
    available: true,
    choosed: false,
    place: 33,
  },
  {
    available: true,
    choosed: false,
    place: 34,
  },
  {
    available: true,
    choosed: false,
    place: 35,
  },
  {
    available: true,
    choosed: false,
    place: 36,
  },
  {
    available: true,
    choosed: false,
    place: 37,
  },
  {
    available: true,
    choosed: false,
    place: 38,
  },
  {
    available: true,
    choosed: false,
    place: 39,
  },
  {
    available: true,
    choosed: false,
    place: 40,
  },
  {
    available: true,
    choosed: false,
    place: 41,
  },
  {
    available: true,
    choosed: false,
    place: 42,
  },
  {
    available: true,
    choosed: false,
    place: 43,
  },
  {
    available: true,
    choosed: false,
    place: 44,
  },
  {
    available: true,
    choosed: false,
    place: 45,
  },
  {
    available: true,
    choosed: false,
    place: 46,
  },
  {
    available: true,
    choosed: false,
    place: 47,
  },
  {
    available: true,
    choosed: false,
    place: 48,
  },
];

const TicketsPage: FC = () => {
  const [ticketCount, setTicketCount] = useState(0);
  // const [chooseSeats, setChooseSeats] = useState(MOCKSCREENING);

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

      <h2 className="header-two">Välj antal biljetter</h2>
      <div className="number-of-tickets-container">
        <div
          onClick={() =>
            setTicketCount(ticketCount != 0 ? ticketCount - 1 : ticketCount)
          }
          className="plus-minus"
        >
          -
        </div>
        <div className="ticket-count">{ticketCount}</div>
        <div
          onClick={() => setTicketCount(ticketCount + 1)}
          className="plus-minus"
        >
          +
        </div>
      </div>

      <h2 className="header-two">Välj platser</h2>

      <div className="movie-screen-seat-container">
        <div className="movie-screen-container">
          <div className="movie-screen-left"></div>
          <div className="movie-screen-middle"></div>
          <div className="movie-screen-right"></div>
        </div>

        <div className="seat-container">
          {MOCKSCREENING.map((seat) => {
            return (
              <div
                key={seat.place}
                onClick={() => {
                  console.log(`clicked ${seat.place}`);
                }}
                className={
                  seat.available ? 'seat-available' : 'seat-not-available'
                }
              >
                {seat.place}
              </div>
            );
          })}
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
        <h2>{ticketCount * 150}kr</h2>
      </div>

      <div className="divider"></div>
      <Link href="/login" className="primary-btn">
        Logga in
      </Link>
      <Link href="/guest" className="primary-btn">
        Gäst
      </Link>
      <Link href="/" className="cancel-btn">
        Avbryt
      </Link>
    </section>
  );
};

export default TicketsPage;

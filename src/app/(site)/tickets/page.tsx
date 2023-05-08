'use client';
export const dynamic = 'force-dynamic';
import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TicketsPage: FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'http://localhost:3000/api/tickets/64536ba84157b856e74f0a37',
        {
          next: { revalidate: 1 },
        }
      );
      const payload = await res.json();

      let numberOfSeats = 48;
      let initialSeatsArray = [];
      let bookedSeatsArray: number[] = payload.map(
        (ticket: { status: number; seat: number }) => {
          return ticket.seat;
        }
      );

      for (let i = 1; i <= numberOfSeats; i++) {
        if (bookedSeatsArray.includes(i)) {
          initialSeatsArray.push({ status: Seat.booked, seatNumber: i });
        } else {
          initialSeatsArray.push({ status: Seat.available, seatNumber: i });
        }
      }
      setSeatsArray(initialSeatsArray);
    };
    fetchData();
  }, []);

  enum Seat {
    available,
    booked,
    choosed,
  }

  const [ticketCount, setTicketCount] = useState(0);
  const [seatsArray, setSeatsArray] = useState<
    [] | { status: Seat; seatNumber: number }[]
  >([]);

  // function numberOfChoosedSeats() {
  //   let num = 0;
  //   for (let obj of seatsArray) {
  //     if (obj.status == Seat.choosed) {
  //       num++;
  //     }
  //   }
  //   console.log(num);
  // }

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
          {seatsArray.map((seat) => {
            return (
              <div
                key={seat.seatNumber}
                onClick={() => {
                  let num = 0;
                  for (let obj of seatsArray) {
                    if (obj.status == Seat.choosed) {
                      num++;
                    }
                  }

                  const newArray = seatsArray.map((item) => {
                    if (item.seatNumber == seat.seatNumber) {
                      if (item.status == Seat.available) {
                        if (num < ticketCount) {
                          return {
                            status: Seat.choosed,
                            seatNumber: seat.seatNumber,
                          };
                        } else {
                          return {
                            status: Seat.available,
                            seatNumber: seat.seatNumber,
                          };
                        }
                      } else if (item.status == Seat.choosed) {
                        return {
                          status: Seat.available,
                          seatNumber: seat.seatNumber,
                        };
                      } else {
                        return item;
                      }
                    } else {
                      return item;
                    }
                  });
                  setSeatsArray(newArray);
                }}
                className={
                  seat.status == Seat.booked
                    ? 'seat-not-available'
                    : seat.status == Seat.choosed
                    ? 'seat-choosed'
                    : 'seat-available'
                }
              >
                {/* {seat.seatNumber} */}
              </div>
            );
          })}
        </div>
      </div>

      <div className="choose-seat-container">
        <div className="choosed-seat"></div>
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

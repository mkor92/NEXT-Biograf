'use client';
export const dynamic = 'force-dynamic';
import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import TicketMovieInfo from '@/app/components/TicketMovieInfo';
import TicketCount from '@/app/components/TicketCount';
import ChooseSeats from '@/app/components/ChooseSeats';
import PaymentSum from '@/app/components/PaymentSum';
import GuestTickets from '@/app/components/GuestTickets';
import { useSearchParams } from 'next/navigation';

export enum Seat {
  available,
  booked,
  choosed,
}

const TicketsPage: FC = () => {
  const [ticketCount, setTicketCount] = useState(0);
  const [seatsArray, setSeatsArray] = useState<[] | { status: Seat; seatNumber: number }[]>([]);
  const [continueGuest, setContinueGuest] = useState(false);

  const searchParams = useSearchParams();
  const screeningId = searchParams.get('screening');
  const screeningDate = searchParams.get('date');
  const movieTitle = searchParams.get('movie');
  const movieImg = searchParams.get('img');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/tickets/${screeningId}`, {
        next: { revalidate: 1 },
      });

      const payload = await res.json();

      let numberOfSeats = 48;
      let initialSeatsArray = [];
      let bookedSeatsArray: number[] = payload.map((ticket: { status: number; seat: number }) => {
        return ticket.seat;
      });

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

  const handleGuest = () => {
    setContinueGuest(true);
  };

  if (continueGuest) {
    return <GuestTickets />;
  } else {
    return (
      <section className="sec-cont tickets-container">
        <h1>Biljettbokning</h1>

        <TicketMovieInfo title={movieTitle} img={movieImg} date={screeningDate} />
        <TicketCount
          ticketCount={ticketCount}
          onClickMinus={() => setTicketCount(ticketCount != 0 ? ticketCount - 1 : ticketCount)}
          onClickPlus={() => setTicketCount(ticketCount + 1)}
        />
        <ChooseSeats
          seatsArray={seatsArray}
          ticketCount={ticketCount}
          onSetSeatsArray={(newArray) => setSeatsArray(newArray)}
        />
        <PaymentSum ticketCount={ticketCount} />
        <Link href="/login" className="primary-btn">
          Logga in
        </Link>
        <button className="primary-btn guest-btn" onClick={handleGuest}>
          Gäst
        </button>

        <Link href="/" className="cancel-btn">
          Avbryt
        </Link>
      </section>
    );
  }
};

export default TicketsPage;

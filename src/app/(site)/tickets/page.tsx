'use client';
// export const dynamic = 'force-dynamic';
import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import TicketMovieInfo from '@/app/components/TicketMovieInfo';
import TicketCount from '@/app/components/TicketCount';
import ChooseSeats from '@/app/components/ChooseSeats';
import PaymentSum from '@/app/components/PaymentSum';
import GuestTickets from '@/app/components/GuestTickets';
import { useSearchParams, usePathname } from 'next/navigation';
import CreateTicket from '@/app/components/CreateTicket';
import { useAuth } from '@/app/context/AuthContext';
import { Seat } from '@/utils/enums';

const TicketsPage: FC = () => {
	const [ticketCount, setTicketCount] = useState(0);
	const [seatsArray, setSeatsArray] = useState<
		[] | { status: Seat; seatNumber: number }[]
	>([]);
	const [continueGuest, setContinueGuest] = useState(false);
	const [continuePayment, setContinuePyament] = useState(false);
	const [viewBookingStepOne, setViewBookingStepOne] = useState(true);
	const [youHaveToSelectTickets, setYouHaveToSelectTickets] = useState(false);
	const [bookingConfirmed, setBookingConfirmed] = useState(false);

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const screeningId = searchParams.get('screening');
	const screeningDate = searchParams.get('date');
	const movieTitle = searchParams.get('movie');
	const movieImg = searchParams.get('img');
	const [guestData, setGuestData] = useState<{
		name: string;
		email: string;
	}>({
		name: '',
		email: '',
	});
	const { user } = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`/api/tickets/${screeningId}`, {
				next: { revalidate: 1 },
			});

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
					initialSeatsArray.push({ status: Seat.BOOKED, seatNumber: i });
				} else {
					initialSeatsArray.push({ status: Seat.AVAILABLE, seatNumber: i });
				}
			}
			setSeatsArray(initialSeatsArray);
		};

		fetchData();
	}, []);

	function numberOfChoosedSeats() {
		let numberOfChoosedSeats = 0;
		for (let i = 0; i < seatsArray.length; i++) {
			if (seatsArray[i].status == Seat.CHOOSED) {
				numberOfChoosedSeats++;
			}
		}
		return numberOfChoosedSeats;
	}

	let numSeatsYouHaveChoosed = numberOfChoosedSeats();

	function availableSeats() {
		let numberOfBookedSeats = 0;
		for (let i = 0; i < seatsArray.length; i++) {
			if (seatsArray[i].status == Seat.BOOKED) {
				numberOfBookedSeats++;
			}
		}
		let availableSeats = seatsArray.length - numberOfBookedSeats;
		return availableSeats;
	}

	const handleGuest = () => {
		if (ticketCount > 0 && numSeatsYouHaveChoosed > 0) {
			setContinueGuest(true);
			setViewBookingStepOne(false);
		} else {
			setYouHaveToSelectTickets(true);
		}
	};
	return (
		<>
			<section className="sec-cont tickets-container">
				<h1>Biljettbokning</h1>

				{viewBookingStepOne && (
					<>
						<TicketMovieInfo
							title={movieTitle}
							img={movieImg}
							date={screeningDate}
						/>
						<TicketCount
							ticketCount={ticketCount}
							onClickMinus={() => {
								if (numSeatsYouHaveChoosed < ticketCount) {
									setTicketCount(ticketCount - 1);
								}
							}}
							onClickPlus={() => {
								let freeSeats = availableSeats();
								setTicketCount(
									ticketCount < freeSeats ? ticketCount + 1 : ticketCount
								);
							}}
						/>
						<ChooseSeats
							seatsArray={seatsArray}
							ticketCount={ticketCount}
							onSetSeatsArray={(newArray) => setSeatsArray(newArray)}
						/>

						<PaymentSum ticketCount={ticketCount} />
						{youHaveToSelectTickets && <p>You have to select tickets!</p>}
						{user ? (
							<button
								onClick={() => {
									if (ticketCount > 0 && numSeatsYouHaveChoosed > 0) {
										setContinuePyament(true);
										setViewBookingStepOne(false);
									} else {
										setYouHaveToSelectTickets(true);
									}
								}}
								className="primary-btn"
							>
								Fortsätt
							</button>
						) : (
							<Link
								href={
									'/login?p=' +
									encodeURIComponent(`${pathname}?${searchParams}`)
								}
								className="primary-btn"
							>
								Logga in
							</Link>
						)}
						<button
							data-testid="guest-btn"
							className="primary-btn guest-btn"
							onClick={handleGuest}
						>
							Gäst
						</button>

						<Link href="/" className="cancel-btn">
							Avbryt
						</Link>
					</>
				)}
				{continueGuest && (
					<GuestTickets
						onChange={(e: any) =>
							setGuestData({ ...guestData, [e.target.name]: e.target.value })
						}
						continuePayment={() => {
							setContinueGuest(false);
							setContinuePyament(true);
						}}
					/>
				)}
				{continuePayment && (
					<CreateTicket
						seatsArray={seatsArray}
						screeningId={screeningId}
						guestData={guestData}
						onClickToCreateTicket={() => {
							setBookingConfirmed(true);
							setContinuePyament(false);
						}}
					/>
				)}
				{bookingConfirmed && <p>Bokning bekräftad!</p>}
			</section>
		</>
	);
};

export default TicketsPage;

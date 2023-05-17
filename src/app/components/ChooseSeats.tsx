import { FC } from 'react';
import { Seat } from '@/utils/enums';

type Props = {
	seatsArray: [] | { status: Seat; seatNumber: number }[];
	ticketCount: number;
	onSetSeatsArray: (
		newArray: {
			status: Seat;
			seatNumber: number;
		}[]
	) => void;
};

const ChooseSeats: FC<Props> = ({
	seatsArray,
	ticketCount,
	onSetSeatsArray,
}) => {
	return (
		<>
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
									for (let seat of seatsArray) {
										if (seat.status == Seat.CHOOSED) {
											num++;
										}
									}
									const newArray = seatsArray.map((item) => {
										if (item.seatNumber == seat.seatNumber) {
											if (item.status == Seat.AVAILABLE) {
												if (num < ticketCount) {
													return {
														status: Seat.CHOOSED,
														seatNumber: seat.seatNumber,
													};
												} else {
													return {
														status: Seat.AVAILABLE,
														seatNumber: seat.seatNumber,
													};
												}
											} else if (item.status == Seat.CHOOSED) {
												return {
													status: Seat.AVAILABLE,
													seatNumber: seat.seatNumber,
												};
											} else {
												return item;
											}
										} else {
											return item;
										}
									});
									onSetSeatsArray(newArray);
								}}
								className={
									seat.status == Seat.BOOKED
										? 'seat-not-available'
										: seat.status == Seat.CHOOSED
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
		</>
	);
};

export default ChooseSeats;

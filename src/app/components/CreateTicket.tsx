import { FC } from 'react';
import { Seat } from '../(site)/tickets/page';
import { useAuth } from '@/app/context/AuthContext';

type Props = {
	seatsArray: [] | { status: Seat; seatNumber: number }[];
	screeningId: string | null;
	guestData: {
		name: string;
		email: string;
	};
};

const CreateTicket: FC<Props> = ({ seatsArray, screeningId, guestData }) => {
	const { user } = useAuth();

	return (
		<div>
			<button
				onClick={() => {
					let ticketsArray: {
						screening: string;
						seat: number;
						email: string;
					}[] = [];

					for (let i = 0; i < seatsArray.length; i++) {
						if (seatsArray[i].status == Seat.CHOOSED && screeningId) {
							ticketsArray.push({
								screening: screeningId,
								seat: seatsArray[i].seatNumber,
								email: user ? user.email : guestData.email,
							});
						}
					}

					fetch('http://localhost:3000/api/tickets', {
						method: 'POST',
						headers: { 'content-Type': 'application/json' },
						body: JSON.stringify(ticketsArray),
					});
				}}
				className="primary-btn"
			>
				Create Ticket
			</button>
		</div>
	);
};

export default CreateTicket;

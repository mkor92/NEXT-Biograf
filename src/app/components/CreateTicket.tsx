import { FC } from 'react';
import { Seat } from '@/utils/enums';
import { useAuth } from '@/app/context/AuthContext';

type Props = {
	seatsArray: [] | { status: Seat; seatNumber: number }[];
	screeningId: string | null;
	guestData: {
		name: string;
		email: string;
	};
	onClickToCreateTicket: () => void;
};

const CreateTicket: FC<Props> = ({
	seatsArray,
	screeningId,
	guestData,
	onClickToCreateTicket,
}) => {
	const { user } = useAuth();

	return (
		<div>
			{
				// temporary code for test
			}
			<ul>
				<li data-testid="payment-method">swish</li>
				<li>kort</li>
				<li>faktura</li>
				<li>check</li>
			</ul>

			{
				// end temporary code
			}
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

					fetch(`/api/tickets`, {
						method: 'POST',
						headers: { 'content-Type': 'application/json' },
						body: JSON.stringify(ticketsArray),
					});
					onClickToCreateTicket();
				}}
				className="primary-btn"
			>
				Betala
			</button>
		</div>
	);
};

export default CreateTicket;

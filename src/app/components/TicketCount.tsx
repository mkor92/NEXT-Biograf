import { FC } from 'react';

type Props = {
	ticketCount: number;
	onClickMinus: () => void;
	onClickPlus: () => void;
};

const TicketCount: FC<Props> = ({ ticketCount, onClickMinus, onClickPlus }) => {
	return (
		<>
			<h2 className="header-two">Välj antal biljetter</h2>
			<div className="number-of-tickets-container">
				<div onClick={onClickMinus} className="plus-minus">
					-
				</div>
				<div className="ticket-count">{ticketCount}</div>
				<div
					data-testid="ticket-count-plus"
					onClick={onClickPlus}
					className="plus-minus"
				>
					+
				</div>
			</div>
		</>
	);
};

export default TicketCount;

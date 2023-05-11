import { FC } from 'react';
import { Seat } from '../(site)/tickets/page';

type Props = {
  seatsArray: [] | { status: Seat; seatNumber: number }[];
};

const CreateTicket: FC<Props> = ({ seatsArray }) => {
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
            if (seatsArray[i].status == Seat.CHOOSED) {
              ticketsArray.push({
                screening: '6458ec6c877b51105fd008b2',
                seat: seatsArray[i].seatNumber,
                email: 'test@test.com',
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

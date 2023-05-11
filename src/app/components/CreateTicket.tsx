import { FC } from 'react';

const ticketData = {
  screening: '6458ec6c877b51105fd008b2',
  seat: 12,
  email: 'test@test.com',
};

const CreateTicket: FC = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetch('http://localhost:3000/api/tickets', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(ticketData),
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

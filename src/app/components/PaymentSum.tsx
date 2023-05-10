import { FC } from 'react';

type Props = {
  ticketCount: number;
};

const PaymentSum: FC<Props> = ({ ticketCount }) => {
  return (
    <>
      <div className="divider"></div>
      <div className="total-sum-container">
        <h2>Att betala:</h2>
        <h2>{ticketCount * 150}kr</h2>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default PaymentSum;

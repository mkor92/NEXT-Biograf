import { FC } from 'react';

import Image from 'next/image';

const TicketMovieInfo: FC = () => {
  return (
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
  );
};

export default TicketMovieInfo;

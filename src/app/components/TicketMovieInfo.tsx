import Image from 'next/image';

export default function TicketMovieInfo(props: any) {
  return (
    <div className="img-text-container">
      <Image src={props.img} alt="movie image" width={141.75} height={210}></Image>
      <div>
        <h2 className="movie-title">{props.title}</h2>
        <p>
          {props.date.split('T')[0]}
          <br /> {props.date.split('T')[1].slice(0, 5)}
        </p>
      </div>
    </div>
  );
}

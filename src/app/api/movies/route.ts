import { db } from '../../../utils/db';
db();

const MOCKMOVIES = {
  data: [
    {
      id: 1,
      name: 'Encanto',
      img: '/images/encanto.jpg',
    },
    {
      id: 2,
      name: 'Isle of dogs',
      img: '/images/encanto.jpg',
    },
    {
      id: 3,
      name: 'Min granne Totoro',
      img: '/images/encanto.jpg',
    },
    {
      id: 4,
      name: 'The Shawshank Redemption',
      img: '/images/encanto.jpg',
    },
    {
      id: 5,
      name: 'Forrest Gump',
      img: '/images/encanto.jpg',
    },
  ],
};

export async function GET(request: Request) {
  return new Response(JSON.stringify(MOCKMOVIES));
}

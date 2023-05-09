import { db } from '@/utils/db';
import Screening from '@/models/screening.model';
db();

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { screeningId: string };
  }
) {
  const screeningId = params.screeningId;
  const movies = await Screening.find({ _id: screeningId });
  return new Response(JSON.stringify(movies));
}

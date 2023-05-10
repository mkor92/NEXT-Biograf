import { db } from '@/utils/db';
import Ticket from '@/models/ticket.model';
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
  const movies = await Ticket.find({ screening: screeningId });
  return new Response(JSON.stringify(movies));
}

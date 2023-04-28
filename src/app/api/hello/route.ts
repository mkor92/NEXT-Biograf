import { db } from '@/utils/db';
db();

export async function GET(request: Request) {
  return new Response("Hello from NextJS!")
}

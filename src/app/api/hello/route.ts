import { db } from '@/utils/db';
import User from '@/models/user.model';
db();

export async function GET(request: Request) {
  const user = new User({
    name: "Fabricios",
    password: "admin",
    email: "jag@fabricioflores.se"
  });

  const res = await user.save();
  return new Response(JSON.stringify(res))
}

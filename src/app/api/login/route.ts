import { db } from '@/utils/db';
import User from '@/models/user.model';
import { NextResponse } from 'next/server';
db();

export async function POST(request: Request) {
    const data = await request.json();
    if (!data.email || !data.password) return NextResponse.json({ "msg": "Missing arguments" }, { status: 400 });

    const user = await User.findOne({ email: data.email });
    if (!user) return NextResponse.json({ "msg": "Wrong email or password" }, { status: 400 });

    const correctPassowrd = await user.comparePassword(data.password);
    if (!correctPassowrd) return NextResponse.json({ "msg": "Wrong email or password" }, { status: 400 });

    return NextResponse.json({ "msg": "Logged in!" }, { status: 200 });
}
